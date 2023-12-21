import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './modules/address/address.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [UsersModule, AddressModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
