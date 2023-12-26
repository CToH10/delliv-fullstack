import { ApiPropertyOptional, } from '@nestjs/swagger';
import { IsString, MaxLength, IsOptional } from 'class-validator';

export class UpdateAddressDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(9)
    cep: string;
  
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(19)
    state: string;
  
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(30)
    city: string;
  
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(50)
    street: string;
  
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(30)
    number: string;
  
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsOptional()
    @MaxLength(120)
    complement: string;
}
