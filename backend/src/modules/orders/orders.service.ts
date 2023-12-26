import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { RequestUser } from './orders.controller';
import { OrderRepository } from './repositories/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private orderRepository: OrderRepository){}
  create(createOrderDto: CreateOrderDto, user: RequestUser) {
    return this.orderRepository.create(createOrderDto, user);
  }

  findAll() {
    return this.orderRepository.findAll();
  }

  findOne(id: string) {
    return this.orderRepository.findOne(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  updateStatus(id:string) {
    return this.orderRepository.updateStatus(id)
  }

  remove(id: string) {
    return this.orderRepository.delete(id)
  }
}
