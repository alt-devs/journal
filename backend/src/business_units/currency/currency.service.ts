import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from '../../entity/Currency';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { CurrencyDTO } from './currency.dto';

@Injectable()
export class CurrencyService {
  constructor(@InjectRepository(Currency) private readonly repo: Repository<Currency>) { }

  public async findAll(): Promise<CurrencyDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => CurrencyDTO.fromEntity(e)));
  }

  public async findById(id: number): Promise<CurrencyDTO> {
    return await getRepository(Currency)
      .createQueryBuilder('currency')
      .where('currency.id = :id', { id })
      .getOne()
      .then(e => CurrencyDTO.fromEntity(e));
  }

  public async create(dto: CurrencyDTO): Promise<CurrencyDTO> {
//    const curr = dto.toEntity();
    return await this.repo.save(dto)
      .then(e => CurrencyDTO.fromEntity(e));
  }

  public async update(dto: CurrencyDTO): Promise<UpdateResult> {
    return await this.repo.update(dto.id, dto);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
