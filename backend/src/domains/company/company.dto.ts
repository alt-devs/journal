import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsString} from 'class-validator';
import { CompanyEntity } from './company.entity';
import { CurrencyEntity } from '../currency/currency.entity';

export class CompanyDTO implements Readonly<CompanyDTO> {
  @ApiModelProperty({ required: true })
//  @IsUUID()
  id: number;

  @ApiModelProperty()
  // @IsString()
  currency: CurrencyEntity;

  @ApiModelProperty({ required: true })
  @IsString()
  name: string;

  @ApiModelProperty({ required: true })
  @IsString()
  @IsEmail()
  email: string;

  @ApiModelProperty()
  @IsString()
  photoPath: string;

  @ApiModelProperty()
  @IsString()
  description: string;

  public static from(dto: Partial<CompanyDTO>) {
    const obj = new CompanyDTO();
    obj.id = dto.id;
    obj.name = dto.name;
    obj.currency = dto.currency;
    obj.email = dto.email;
    obj.photoPath = dto.photoPath;
    obj.description = dto.description;
    return obj;
  }

  public static fromEntity(entity: CompanyEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      currency: entity.currency,
      email: entity.email,
      photoPath: entity.photoPath,
      description: entity.description,
    });
  }

  public toEntity(/*user: User = null*/) {
    const obj = new CompanyEntity();
    obj.id = this.id;
    obj.name = this.name;
    obj.currency = this.currency;
    obj.email = this.email;
    obj.photoPath = this.photoPath;
    obj.description = this.description;
    return obj;
  }
}
