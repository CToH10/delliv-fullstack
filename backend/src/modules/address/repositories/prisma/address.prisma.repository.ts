import { Injectable } from "@nestjs/common";
import { AddressRepository } from "../address.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateAddressDto } from "../../dto/create-address.dto";
import { UpdateAddressDto } from "../../dto/update-address.dto";
import { Address } from "../../entities/address.entity";
import { plainToInstance } from "class-transformer";

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
    constructor(private prisma:PrismaService){}
    async create(data: CreateAddressDto, username: string): Promise<Address> {
        const address = new Address()
        Object.assign(address, {...data})

        const newAddress = await this.prisma.address.create({
            data: {
                ...address,
                username: username
            }
        })

        return plainToInstance(Address, newAddress)
    }

    async findOne(id: string): Promise<Address> {
        const address = await this.prisma.address.
        findUnique({where: {id}})

        return plainToInstance(Address, address)
    }
    async update(username: string, data: UpdateAddressDto): Promise<Address> {

        const updatedAddress = await this.prisma.address.update({where:{
            username
        }, data})

        return plainToInstance(Address, updatedAddress)
    }
    async delete(id: string): Promise<void> {
        await this.prisma.address.delete({where: {id}})
    }

}