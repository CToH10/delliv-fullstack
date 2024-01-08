import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from 'src/auth/jwt.auth.guard';
import { AdminGuard } from 'src/auth/admin.auth.guard';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBearerAuth()
  @Post()
  @UseGuards(JWTAuthGuard, AdminGuard)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(
    @Query('name') name: string | undefined,
    @Query('stockMin') stockMin: number | undefined,
    @Query('priceMin') priceMin: number | undefined,
    @Query('priceMax') priceMax: number | undefined,
    @Query('stockBy') stockBy: 'asc' | 'desc' | undefined,
    @Query('priceBy') priceBy: 'asc' | 'desc' | undefined,
    @Query('page') page: number | undefined,
    @Query('perPage') perPage: number | undefined,

  ) {
    return this.productsService.findAll(
      name,
      stockMin,
      priceMin,
      priceMax,
      stockBy,
      priceBy,
      page,
      perPage,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @UseGuards(JWTAuthGuard, AdminGuard)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JWTAuthGuard, AdminGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
