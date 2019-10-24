import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyDTO } from './currency.dto';

@Controller('currencies')
export class CurrencyController {
  constructor(private serv: CurrencyService) { }

  @Get()
  public findAll(): Promise<CurrencyDTO[]> {
    return this.serv.findAll();
  }

  @Get(':id')
  public findById(@Param('id') id: number) {
    return this.serv.findById(id);
  }

  @Post()
  public create(@Body() dto: CurrencyDTO): Promise<CurrencyDTO> {
    return this.serv.create(dto);
  }

  @Put(':id')
  public update(@Param('id') id, @Body() dto: CurrencyDTO): Promise<any> {
    return this.serv.update(dto);
  }

  @Delete(':id')
  public delete(@Param('id') id: number) {
    return this.serv.delete(id);
  }
}
