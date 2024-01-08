import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor, HttpCode, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from 'src/auth/jwt.auth.guard';
import { AdminGuard } from 'src/auth/admin.auth.guard';
import { CurrentUser } from '../users/user.decorator';

export interface RequestUser {
  identifier: string;
  admin: boolean;
  id: string;
}

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @UseGuards(JWTAuthGuard)
  create(@Body() createOrderDto: CreateOrderDto, @CurrentUser() user: RequestUser) {
    return this.ordersService.create(createOrderDto, user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JWTAuthGuard, AdminGuard)
  @Get() 
  findAll(
    @Query('address') address: string | undefined,
    @Query('status') status: 'sorting' | 'shipping' | 'delivered' | undefined,
    @Query('priceTotalMin') priceTotalMin: number | undefined,
    @Query('priceTotalMax') priceTotalMax: number | undefined,
    @Query('product') product: string | undefined,
    @Query('priceBy') priceBy: 'asc' | 'desc' | undefined,
    @Query('page') page: number | undefined,
    @Query('perPage') perPage: number | undefined,
    @Query('user_id') user_id: string | undefined,

  ) {
    return this.ordersService.findAll(
      address,
      status,
      priceTotalMax,
      priceTotalMin,
      product,
      priceBy,
      page,
      perPage,
      user_id);
  }

  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/user')
  @UseGuards(JWTAuthGuard)
  findByUser(@CurrentUser() user: RequestUser) {
    return this.ordersService.findByUser(user.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JWTAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.ordersService.findOne(id, user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JWTAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto, @CurrentUser() user: RequestUser) {
    return this.ordersService.update(id, updateOrderDto, user);
  }

  @ApiBearerAuth()
  @Patch(':id/status')
  @UseGuards(JWTAuthGuard, AdminGuard)
  updateStatus(@Param('id') id: string) {
    return this.ordersService.updateStatus(id)
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JWTAuthGuard)
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user:RequestUser) {
    return this.ordersService.remove(id, user);
  }
}
