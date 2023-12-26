import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    stock: number

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    price: number
}
