import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AddressRepository } from './repositories/address.repository';
import { AddressPrismaRepository } from './repositories/prisma/address.prisma.repository';

@Module({
  controllers: [AddressController],
  providers: [AddressService, PrismaService, {provide: AddressRepository, useClass: AddressPrismaRepository}],
})
export class AddressModule {}
