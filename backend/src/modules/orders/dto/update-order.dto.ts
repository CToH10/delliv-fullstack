import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional()
  @IsNumber()
  @IsNotEmpty()
  quantity: number
}
