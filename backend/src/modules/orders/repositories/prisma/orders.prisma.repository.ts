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

    isAllowed(reqUser, ownerUser) {
        if (reqUser.id !== ownerUser || !reqUser.admin) {
            throw new HttpException("Ação não permitida", 401)
        }
    }

    async create(data: CreateOrderDto, user: RequestUser): Promise<Order> {
        const userOrderer = await this.prisma.users.findUnique({where: {id: user.id}, include: {address: true}})

        const addressValues = Object.values(userOrderer.address).join(", ")

        const productToAdd = await this.prisma.products.findUnique({where: {id: data.product_id}})

        if (productToAdd.stock < data.quantity) {
            throw new HttpException('Produto indisponível nessa quantidade', 400)
        }

        await this.prisma.products.update({where: {id: productToAdd.id}, data: {
            stock: productToAdd.stock - data.quantity
        }})

        const newOrder = await this.prisma.orders.create({data: {
            ...data,
            user_id: userOrderer.id,
            address: addressValues,
            priceTotal: productToAdd.price * data.quantity,
        }, include: {
            product: true
        }})

        return plainToInstance(Order, newOrder)
    }

    async findAll(): Promise<Order[]> {
        const allOrders = await this.prisma.orders.findMany()

        return plainToInstance(Order, allOrders);
    }

    async findOne(id: string, user: RequestUser): Promise<Order> {
        const order = await this.prisma.orders.findUnique({where:{id}})

        if (!order) {
            throw new HttpException('Pedido não encontrado', 404)
        }

        this.isAllowed(user, order.user_id)

        return plainToInstance(Order, order)
    }

    async findByUser(id: string): Promise<Order> {
        const userOrders = await this.prisma.orders.findMany({where: {
            user_id:id
        }})

        if (userOrders.length === 0) {
            throw new HttpException('Usuário não possui pedidos', 404   )
        }

        return plainToInstance(Order, userOrders)
    }

    async update(id: string, data: UpdateOrderDto, user: RequestUser): Promise<Order> {
        const order = await this.prisma.orders.findUnique({where:{id}})

        if (!order) {
            throw new HttpException('Pedido não encontrado', 404)
        }

        this.isAllowed(user, order.user_id)

        const product = await this.prisma.products.findUnique({where: {id: order.product_id}})

        if (product.stock < data.quantity) {
            throw new HttpException('Produto indisponível nessa quantidade', 400)
        }
        
        if (data.quantity === 0) {
            await this.prisma.orders.delete({where: {id}})

            return {'message': 'Produto excluído com sucesso'}
        }

        const changeStock = order.quantity - data.quantity

        await this.prisma.products.update({where: {id: order.product_id}, data: {
            stock: product.stock + changeStock
        }})

        const updatedOrder = await this.prisma.orders.update({where: {id}, data:{
            quantity: data.quantity
        }, include: {
            product: true
        }})

        return plainToInstance(Order, updatedOrder)
    }   

    async updateStatus(id: string): Promise<Order> {
        const order = await this.prisma.orders.findUnique({where: {id}})

        if (!order) {
            throw new HttpException('Pedido não encontrado', 404)
        }

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

    async delete(id: string, user: RequestUser): Promise<void> {

        const order = await this.prisma.orders.findUnique({where: {id}})

        if (!order) {
            throw new HttpException('Pedido não encontrado', 404)
        }

        this.isAllowed(user, order.user_id)
        
        await this.prisma.orders.delete({where: {id}})
    }
    
}