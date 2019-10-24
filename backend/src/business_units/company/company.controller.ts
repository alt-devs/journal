import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompanyDTO } from '../company/company.dto';
import { CompanyService } from './company.service';
import { CurrencyDTO } from '../currency/currency.dto';

@Controller('companies')
export class CompanyController {
  constructor(private serv: CompanyService) { }

  @Get()
  public async getAll(): Promise<CompanyDTO[]> {
    return await this.serv.getAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return await this.serv.findById(id);
  }

  @Post()
  public create(@Body() dto: CompanyDTO): Promise<CompanyDTO> {
    return this.serv.create(dto);
  }

  @Put(':id')
  public update(@Param('id') id, @Body() dto: CompanyDTO): Promise<any> {
    return this.serv.update(dto);
  }

  @Delete(':id')
  public delete(@Param('id') id: number) {
    return this.serv.delete(id);
  }}
