import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CurrencyEntity } from './currency.entity';
import { CreateCurrencyDto } from "./dto/create-currency.dto"
import { UpdateCurrencyDto } from "./dto/update-currency.dto"

@Injectable() 
export class CurrencyService {
  constructor(@InjectRepository(CurrencyEntity) private readonly CurrencyRepository: Repository<CurrencyEntity>) { }

  async createCurrency (data: CreateCurrencyDto): Promise<CurrencyEntity> {
    let currency = new CurrencyEntity()
    currency.name = data.name;

    // TODO: The stub. Instead of "1", we must to substitute the id of the real user
    currency.createdBy = 1;
    currency.updatedBy = 1;

    await this.CurrencyRepository.save(currency)

    return currency
  }

  async updateCurrency (id: number, dto: UpdateCurrencyDto): Promise<CurrencyEntity> {
    await this.CurrencyRepository.update(id, {...dto});
    return this.CurrencyRepository.findOne(id)
  }

  async removeCurrency (id: number): Promise<Boolean> {
    const result = await this.CurrencyRepository.delete(id)
    return !!result.affected;
  }

  async getCurrencies () {
    return await this.CurrencyRepository.find()
  }
}

// TODO: Stayed as an example. Remove later
// @Injectable()
// export class CurrencyService {
//   constructor(@InjectRepository(CurrencyEntity) private readonly repo: Repository<CurrencyEntity>) { }

//   public async findAll(): Promise<CurrencyDTO[]> {
//     return await this.repo.find()
//       .then(items => items.map(e => CurrencyDTO.fromEntity(e)));
//   }

//   public async findById(id: number): Promise<CurrencyDTO> {
//     return await getRepository(CurrencyEntity)
//       .createQueryBuilder('currency')
//       .where('currency.id = :id', { id })
//       .getOne()
//       .then(e => CurrencyDTO.fromEntity(e));
//   }

//   public async create(dto: CurrencyDTO): Promise<CurrencyDTO> {
// //    const curr = dto.toEntity();
//     return await this.repo.save(dto)
//       .then(e => CurrencyDTO.fromEntity(e));
//   }

//   public async update(dto: CurrencyDTO): Promise<UpdateResult> {
//     return await this.repo.update(dto.id, dto);
//   }

//   public async delete(id: number): Promise<DeleteResult> {
//     return await this.repo.delete(id);
//   }
// }
