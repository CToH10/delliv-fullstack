import { CreateOrderDto } from "../dto/create-order.dto";
import { UpdateOrderDto } from "../dto/update-order.dto";
import { Order } from "../entities/order.entity";
import { RequestUser } from "../orders.controller";

export interface FindAllOrdersReturn {
    count: number;
    previousPage: string | null;
    nextPage: string | null;
    data: Order[];
}

export abstract class OrderRepository {
    abstract create(data: CreateOrderDto, user: RequestUser): Promise<Order>;
    abstract findAll(
        address: string | undefined,
        status: 'sorting' | 'shipping' | 'delivered' | undefined,
        priceTotalMax: number | undefined,
        priceTotalMin: number | undefined,
        product: string | undefined,
        priceBy: 'asc' | 'desc' | undefined,
        page: number | undefined,
        perPage: number | undefined,
        user_id: string | undefined,
    ): Promise<FindAllOrdersReturn>;
    abstract findOne(id: string, user: RequestUser): Promise<Order>;
    abstract findByUser(id: string): Promise<Order>;
    abstract update(id: string, data: UpdateOrderDto, user: RequestUser): Promise<Order>;
    abstract updateStatus(id: string): Promise<Order>;
    abstract delete(id: string, user: RequestUser): Promise<void>;
}