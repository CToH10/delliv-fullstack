import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ProductRepository } from './repositories/products.repository';
import { ProductPrismaRepository } from './repositories/prisma/products.prisma.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, {provide: ProductRepository, useClass: ProductPrismaRepository
  }],
  exports: [ProductsService]
})
export class ProductsModule {}
