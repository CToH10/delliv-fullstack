import { CreateOrderDto } from "../dto/create-order.dto";
import { UpdateOrderDto } from "../dto/update-order.dto";
import { Order } from "../entities/order.entity";
import { RequestUser } from "../orders.controller";

export abstract class OrderRepository {
    abstract create(data: CreateOrderDto, user: RequestUser): Promise<Order>;
    abstract findAll(): Promise<Order[]>;
    abstract findOne(id: string, user: RequestUser): Promise<Order>;
    abstract findByUser(id: string): Promise<Order>;
    abstract update(id: string, data: UpdateOrderDto, user: RequestUser): Promise<Order>;
    abstract updateStatus(id: string): Promise<Order>;
    abstract delete(id: string, user: RequestUser): Promise<void>;
}