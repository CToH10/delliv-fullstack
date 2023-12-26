import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { Product } from "../entities/product.entity";

export abstract class ProductRepository {
    abstract create(data: CreateProductDto): Promise<Product>;
    abstract findAll(): Promise<Product[]>;
    abstract findOne(id: string): Promise<Product>;
    abstract update(id: string, data:UpdateProductDto): Promise<Product>;
    abstract delete(id: string): Promise<void>;
}