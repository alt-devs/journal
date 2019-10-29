import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ParseIntPipe } from "@nestjs/common"

import { CompanyEntity } from './company.entity'
import { CompanyService } from './company.service'
import { CompanyDto } from './dto/company.dto'
import { CreateCompanyDto } from './dto/create-company.dto'
import { UpdateCompanyDto } from './dto/update-company.dto'
import { NewCompanyInput } from './dto/new-company.input'

@Resolver((of) => CompanyEntity)
export class CompanyResolver {
  constructor (private readonly companyService: CompanyService) {}

  @Query(() => [ CompanyDto ])
  async companies () {
    return this.companyService.getCompanies()
  }

  @Mutation(() => CompanyDto)
  async createCompany (@Args('data') data: NewCompanyInput) {
    return this.companyService.createCompany(data)
  }

  @Mutation(() => CompanyDto)
  async updateCompany (@Args('id', ParseIntPipe) id: number, @Args('data') data: UpdateCompanyDto) {
    return this.companyService.updateCompany(id, data)
  }

  @Mutation(returns => Boolean)
  async removeCompany(@Args('id', ParseIntPipe) id: number) {
    return this.companyService.removeCompany(id);
  }

}