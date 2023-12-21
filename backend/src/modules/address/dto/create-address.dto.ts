import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(9)
  cep: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(19)
  state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  city: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  street: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  number: string;

  @ApiPropertyOptional()
  @IsString()
  @MaxLength(120)
  complement: string;
}
