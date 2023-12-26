import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateProductDto {
    @ApiPropertyOptional()
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    @IsNumber()
    stock: number

    @ApiPropertyOptional()
    @IsNotEmpty()
    @IsNumber()
    price: number
}
