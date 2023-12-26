import { ApiPropertyOptional, } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class UpdateAddressDto {
    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(9)
    cep: string;
  
    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(19)
    state: string;
  
    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    city: string;
  
    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    street: string;
  
    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    number: string;
  
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @MaxLength(120)
    complement: string;
}
