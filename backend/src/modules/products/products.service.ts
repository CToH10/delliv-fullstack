import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository){}
  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto)
  }

  findAll(
    name: string | undefined,
    stockMin: number | undefined,
    priceMin: number | undefined,
    priceMax: number | undefined,
    stockBy: 'asc' | 'desc' | undefined,
    priceBy: 'asc' | 'desc' | undefined,
    page: number | undefined,
    perPage: number | undefined,) {
    return this.productRepository.findAll(
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

  findOne(id: string) {
    return this.productRepository.findOne(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: string) {
    return this.productRepository.delete(id);
  }
}
