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

  findAll(
    address: string | undefined,
    status: 'sorting' | 'shipping' | 'delivered' | undefined,
    priceTotalMax: number | undefined,
    priceTotalMin: number | undefined,
    product: string | undefined,
    priceBy: 'asc' | 'desc' | undefined,
    page: number | undefined,
    perPage: number | undefined,
    user_id: string | undefined,) {
    return this.orderRepository.findAll(
      address,
      status,
      priceTotalMax,
      priceTotalMin,
      product,
      priceBy,
      page,
      perPage,
      user_id,);
  }

  findOne(id: string, user:RequestUser) {
    return this.orderRepository.findOne(id, user);
  }

  findByUser(id: string) {
    return this.orderRepository.findByUser(id)
  }

  update(id: string, updateOrderDto: UpdateOrderDto, user: RequestUser) {
    return this.orderRepository.update(id, updateOrderDto, user);
  }

  updateStatus(id:string) {
    return this.orderRepository.updateStatus(id)
  }

  remove(id: string, user: RequestUser) {
    return this.orderRepository.delete(id, user)
  }
}
