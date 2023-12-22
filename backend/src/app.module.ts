import { Module } from '@nestjs/common';
import { AddressModule } from './modules/address/address.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [UsersModule, AddressModule, OrdersModule],
})
export class AppModule {}
