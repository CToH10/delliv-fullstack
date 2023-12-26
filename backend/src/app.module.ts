import { Module } from '@nestjs/common';
import { AddressModule } from './modules/address/address.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [UsersModule, AddressModule, OrdersModule, AuthModule, ProductsModule],
})
export class AppModule {}
