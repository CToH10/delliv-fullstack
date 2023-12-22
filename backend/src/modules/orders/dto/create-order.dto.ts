import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

enum OrderStatus {
  sorting = 'sorting',
  shipping = 'shipping',
  delivered = 'delivered',
}

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    enum: ['sorting', 'shipping', 'delivered'],
    default: 'sorting',
  })
  status: OrderStatus;
}
