import { HttpException, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "../../dto/create-order.dto";
import { UpdateOrderDto } from "../../dto/update-order.dto";
import { Order } from "../../entities/order.entity";
import { OrderRepository } from "../orders.repository";
import { PrismaService } from "src/database/prisma.service";
import { RequestUser } from "../../orders.controller";
import { plainToInstance } from "class-transformer";

@Injectable()
export class OrderPrismaRepository implements OrderRepository{
    constructor(private prisma: PrismaService){}
    async create(data: CreateOrderDto, user: RequestUser): Promise<Order> {
        const userOrderer = await this.prisma.users.findUnique({where: {id: user.id}, include: {address: {select: {
            street: true,
            number: true,
            city: true,
            state: true,
            cep: true,
            complement: true,
        }}}})

        const addressValues = Object.values(userOrderer.address).join(", ")

        const productToAdd = await this.prisma.products.findUnique({where: {id: data.product_id}})

        if (productToAdd.stock < data.quantity) {
            throw new HttpException('Produto em falta', 400)
        }

        const newOrder = await this.prisma.orders.create({data: {
            ...data,
            user_id: userOrderer.id,
            address: addressValues,
            priceTotal: productToAdd.price * data.quantity,
        }, include: {
            product: true
        }})

        await this.prisma.products.update({where: {id: productToAdd.id}, data: {
            stock: productToAdd.stock - data.quantity
        }})

        return plainToInstance(Order, newOrder)
    }

    async findAll(): Promise<Order[]> {
        throw new Error("Method not implemented.");
    }

    async findOne(id: string): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateOrderDto): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    async updateStatus(id: string): Promise<Order> {
        const order = await this.prisma.orders.findUnique({where: {id}})

        let newStatus: 'delivered' | 'shipping'

        switch (order.status){
        case 'delivered':
            newStatus = 'delivered'
        break;
        case 'shipping':
            newStatus = 'delivered'
        break;
        case 'sorting':
            newStatus = 'shipping'
        break;
}

        const updatedStatus = await this.prisma.orders.update({where:{id}, data: {
            status: newStatus
        }}) 

        return plainToInstance(Order, updatedStatus)
    }

    async delete(id: string): Promise<void> {
        await this.prisma.orders.delete({where: {id}})
    }
    
}