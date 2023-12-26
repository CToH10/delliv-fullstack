import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number
}
