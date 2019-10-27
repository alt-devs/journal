import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';
import { CurrencyEntity } from './currency.entity';

export class CurrencyDTO implements Readonly<CurrencyDTO> {
  @ApiModelProperty({ required: true })
//  @IsUUID()
  @IsNumber()
  id: number;

  @ApiModelProperty({ required: true })
  @IsString()
  name: string;

  public static from(dto: Partial<CurrencyDTO>) {
    const obj = new CurrencyDTO();
    obj.id = dto.id;
    obj.name = dto.name;
    return obj;
  }

  public static fromEntity(entity: CurrencyEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
    });
  }

  public toEntity(): CurrencyEntity {
    const obj = new CurrencyEntity();
    obj.id = this.id;
    obj.name = this.name;
    return obj;
  }
}
