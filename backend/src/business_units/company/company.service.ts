import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../../entity/company';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { CompanyDTO } from './company.dto';
import { CurrencyDTO } from '../currency/currency.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(Company) private readonly repo: Repository<Company>) { }

  public async getAll(): Promise<CompanyDTO[]> {
    return await this.repo.find({ relations: ['currency'] })
      .then(items => items.map(e => CompanyDTO.fromEntity(e)));
  }

  public async findById(id: number): Promise<CompanyDTO> {
    return await getRepository(Company)
                    .createQueryBuilder('company')
                    .leftJoinAndSelect('company.currency', 'currency')
                    .where('company.id = :id', { id })
                    .getOne()
      .then(e => CompanyDTO.fromEntity(e));
  }

  public async create(dto: CompanyDTO): Promise<CompanyDTO> {
    return await this.repo.save(dto)
      .then(e => CompanyDTO.fromEntity(e));
  }

  public async update(dto: CompanyDTO): Promise<UpdateResult> {
    return await this.repo.update(dto.id, dto);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
