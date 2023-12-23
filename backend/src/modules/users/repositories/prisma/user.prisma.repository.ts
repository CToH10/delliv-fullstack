import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "../user.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateUserDto } from "../../dto/create-user.dto";
import { User } from "../../entities/user.entity";
import { Address } from "src/modules/address/entities/address.entity";
import { plainToInstance } from "class-transformer";
import { UpdateUserDto } from "../../dto/update-user.dto";

@Injectable()
export class UserPrismaRepository implements UserRepository {
    constructor (private prisma:PrismaService) {}
    
    async create(data: CreateUserDto): Promise<User> {
        const foundEmail = await this.findUnique(data.email)
        const foundUsername = await this.findUnique(data.username)

        if (foundEmail || foundUsername){
            throw new ConflictException("Usuário já cadastrado")
        }

        const {address, admin,...rest} = data

        const user = new User()
        Object.assign(user, {...rest})

        const newAddress = new Address()
        Object.assign(newAddress, address)

        const newUser = await this.prisma.users.create({
            data: {
              ...rest,
              address: {
                create: newAddress,
              },
            },
            include: {
              address: {
                select: {
                  id: true,
                  cep: true,
                  state: true,
                  city: true,
                  street: true,
                  number: true,
                  complement: true,
                },
              },
            },
          });

          return plainToInstance(User, newUser)
    }

    async findUnique(identifier: string) : Promise<User>{
        const user = this.prisma.users.findFirst({
            where: {
                OR:[
                     {email: identifier},
                     {username: identifier}
                ]
            }
        })
        
        return plainToInstance(User, user)
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.users.findMany();

        return plainToInstance(User, users);
    }

    async findOne(id: string): Promise<User> {
        const user = await this.prisma.users.findUnique({where: {id}})

        return plainToInstance(User, user)
    }

    async update(id: string, data: UpdateUserDto): Promise<User> {
        const {admin, ...rest} = data
        const user = await this.prisma.users.update({
          where: { id },
          data: { ...rest },
        });
        return plainToInstance(User, user);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.users.delete({
          where: { id },
        });
    }
}