import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CompanyEntity } from './company.entity';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
// import { CompanyDTO } from './company.dto';
// import { CurrencyDTO } from '../currency/currency.dto';

import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"


@Injectable() 
export class CompanyService {
  constructor(@InjectRepository(CompanyEntity) private readonly CompanyRepository: Repository<CompanyEntity>) { }

  async createCompany ({name, email, photoPath, description, id_currency}: CreateCompanyDto): Promise<CompanyEntity> {
    const newCompany = new CompanyEntity()
    newCompany.name = name
    newCompany.email = email
    newCompany.photoPath = photoPath
    newCompany.description = description
    // FIXME
    // newCompany.currency = id_currency
    
    await this.CompanyRepository.save(newCompany)
    return newCompany
  }

  async updateCompany (id: number, dto: UpdateCompanyDto): Promise<CompanyEntity> {
    await this.CompanyRepository.update(id, {...dto});
    return this.CompanyRepository.findOne(id)
  }

  async removeCompany (id: number): Promise<Boolean> {
    const result = await this.CompanyRepository.delete(id)
    return !!result.affected;
  }

  async getCompanies () {
    return await this.CompanyRepository.find()
  }
}

// TODO: Stayed as an example. Remove later.
// @Injectable()
// export class CompanyService {
//   constructor(@InjectRepository(CompanyEntity) private readonly CompanyRepository: Repository<CompanyEntity>) { }

//   public async getAll(): Promise<CompanyDTO[]> {
//     return await this.CompanyRepository.find({ relations: ['currency'] })
//       .then(items => items.map(e => CompanyDTO.fromEntity(e)));
//   }

//   public async findById(id: number): Promise<CompanyDTO> {
//     return await getRepository(CompanyEntity)
//                     .createQueryBuilder('company')
//                     .leftJoinAndSelect('company.currency', 'currency')
//                     .where('company.id = :id', { id })
//                     .getOne()
//       .then(e => CompanyDTO.fromEntity(e));
//   }

//   public async create(dto: CompanyDTO): Promise<CompanyDTO> {
//     return await this.CompanyRepository.save(dto)
//       .then(e => CompanyDTO.fromEntity(e));
//   }

//   public async update(dto: CompanyDTO): Promise<UpdateResult> {
//     return await this.CompanyRepository.update(dto.id, dto);
//   }

//   public async delete(id: number): Promise<DeleteResult> {
//     return await this.CompanyRepository.delete(id);
//   }
// }
