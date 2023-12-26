import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { OrderRepository } from './repositories/orders.repository';
import { OrderPrismaRepository } from './repositories/prisma/orders.prisma.repository';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService, {provide: OrderRepository, useClass: OrderPrismaRepository}],
  exports: [OrdersService]
})
export class OrdersModule {}
