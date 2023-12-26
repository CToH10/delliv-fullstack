import { OrderStatus } from './create-order.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiPropertyOptional({
    enum: ['sorting', 'shipping', 'delivered'],
    default: 'sorting',
  })
  status: OrderStatus;
}
