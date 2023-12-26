import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../products.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateProductDto } from "../../dto/create-product.dto";
import { UpdateProductDto } from "../../dto/update-product.dto";
import { Product } from "../../entities/product.entity";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ProductPrismaRepository implements ProductRepository {
    constructor (private prisma: PrismaService){}
   async create(data: CreateProductDto): Promise<Product> {
        const newProduct = await this.prisma.products.create({data})

        return plainToInstance(Product, newProduct)
    }
    async findAll(): Promise<Product[]> {
        const allProducts = await this.prisma.products.findMany()

        return plainToInstance(Product, allProducts)
    }
    async findOne(id: string): Promise<Product> {
        const product = await this.prisma.products.findUnique({where: {id}})

        return plainToInstance(Product, product)
    }
    async update(id: string, data: UpdateProductDto): Promise<Product> {
        const updatedProduct = await this.prisma.products.update({where: {id}, data})

        return plainToInstance(Product, updatedProduct)
    }
   async delete(id: string): Promise<void> {
        await this.prisma.products.delete({where: {id}})
    }
}