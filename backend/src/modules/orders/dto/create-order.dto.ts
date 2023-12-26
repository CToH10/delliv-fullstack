import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export enum OrderStatus {
  sorting = 'sorting',
  shipping = 'shipping',
  delivered = 'delivered',
}

export class CreateOrderDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  product_id: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number
}
