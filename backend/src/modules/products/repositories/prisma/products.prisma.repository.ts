import { Injectable } from "@nestjs/common";
import { FindAllProductsReturn, ProductRepository } from "../products.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateProductDto } from "../../dto/create-product.dto";
import { UpdateProductDto } from "../../dto/update-product.dto";
import { Product } from "../../entities/product.entity";
import { plainToInstance } from "class-transformer";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductPrismaRepository implements ProductRepository {
    constructor (private prisma: PrismaService){}
   async create(data: CreateProductDto): Promise<Product> {
        const newProduct = await this.prisma.products.create({data})

        return plainToInstance(Product, newProduct)
    }
    async findAll(
        name: string | undefined,
        stockMin: number | undefined,
        priceMin: number | undefined,
        priceMax: number | undefined,
        stockBy: 'asc' | 'desc' | undefined,
        priceBy: 'asc' | 'desc' | undefined,
        page: number | undefined = 1,
        perPage: number | undefined = 12,
    ): Promise<FindAllProductsReturn> {
        if (perPage === 0) {
            perPage = 1;
          }
      
          if (isNaN(Number(perPage))) {
            perPage = 12;
          }
      
          if (isNaN(Number(page))) {
            page = 1;
          }
      
          if (page <= 0) {
            page = 1;
          }


        const query : Prisma.ProductsFindManyArgs = {
            where: {
                name : {contains: name, mode: 'insensitive'},
                price: {
                    lte: priceMax ? +priceMax : priceMax,
                    gte: priceMin ? +priceMin : priceMin
                },
                stock: {
                    gte: stockMin ? +stockMin : stockMin
                }
            },
            orderBy: {
                stock: stockBy,
                price: priceBy
            },
            take: +perPage,
            skip: (+page - 1) * +perPage

        }
        const [allProducts, count] = await this.prisma.$transaction([
            this.prisma.products.findMany(query),
            this.prisma.products.count({where: query.where})
        ])

        let url = `${process.env.SERVICE_URL}cars?`;
    // eslint-disable-next-line prefer-rest-params
        const args = [...arguments];
        const possible = [
        'name',
        'stockMin',
        'priceMin',
        'priceMax',
        'stockBy',
        'priceBy',
        'page',
        'perPage',
        ];

        args.forEach((arg, index) => {
            if (arg && possible[index] !== 'page' && possible[index] !== 'perPage'){
                url = url.concat(`${possible[index]}=${arg}&`)
            }
        })
        
        const returnObj = {
            count,
            previousPage:
            perPage * (page - 1) === 0
              ? null
              : `${url}page=${Number(page) - 1}&perPage=${perPage}`,
            nextPage:
            count <= Number(perPage * page)
              ? null
              : `${url}page=${Number(page) + 1}&perPage=${perPage}`,
            data: plainToInstance(Product, allProducts)
        }

        return returnObj
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