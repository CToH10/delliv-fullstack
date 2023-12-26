import { HttpException, Injectable } from "@nestjs/common";
import { AddressRepository } from "../address.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateAddressDto } from "../../dto/create-address.dto";
import { UpdateAddressDto } from "../../dto/update-address.dto";
import { Address } from "../../entities/address.entity";
import { plainToInstance } from "class-transformer";

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
    constructor(private prisma:PrismaService){}
    async create(data: CreateAddressDto, id: string): Promise<Address> {
        const address = new Address()
        Object.assign(address, {...data})

        const newAddress = await this.prisma.address.create({
            data: {
                ...address,
                user_id: id
            }
        })

        return plainToInstance(Address, newAddress)
    }

    async findAll(): Promise<Address[]> {
        const addresses = await this.prisma.address.findMany()

        return plainToInstance(Address, addresses)
    }

    async findOne(id: string): Promise<Address> {
        const address = await this.prisma.address.
        findUnique({where: {id}})

        if (!address){
            throw new HttpException('Endereço não encontrado', 404)
        }

        return plainToInstance(Address, address)
    }
    async update(id: string, data: UpdateAddressDto): Promise<Address> {

        const updatedAddress = await this.prisma.address.update({where:{
            id
        }, data})

        if (!updatedAddress){
            throw new HttpException('Endereço não encontrado', 404)
        }

        return plainToInstance(Address, updatedAddress)
    }
    async delete(id: string): Promise<void> {
        const address = await this.prisma.address.
        findUnique({where: {id}})

        if (!address){
            throw new HttpException('Endereço não encontrado', 404)
        }

        await this.prisma.address.delete({where: {id}})
    }

}