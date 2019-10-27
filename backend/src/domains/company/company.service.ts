import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './company.entity';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { CompanyDTO } from './company.dto';
import { CurrencyDTO } from '../currency/currency.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(CompanyEntity) private readonly CompanyRepository: Repository<CompanyEntity>) { }

  public async getAll(): Promise<CompanyDTO[]> {
    return await this.CompanyRepository.find({ relations: ['currency'] })
      .then(items => items.map(e => CompanyDTO.fromEntity(e)));
  }

  public async findById(id: number): Promise<CompanyDTO> {
    return await getRepository(CompanyEntity)
                    .createQueryBuilder('company')
                    .leftJoinAndSelect('company.currency', 'currency')
                    .where('company.id = :id', { id })
                    .getOne()
      .then(e => CompanyDTO.fromEntity(e));
  }

  public async create(dto: CompanyDTO): Promise<CompanyDTO> {
    return await this.CompanyRepository.save(dto)
      .then(e => CompanyDTO.fromEntity(e));
  }

  public async update(dto: CompanyDTO): Promise<UpdateResult> {
    return await this.CompanyRepository.update(dto.id, dto);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.CompanyRepository.delete(id);
  }
}
