import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { Product } from "../entities/product.entity";

export interface FindAllProductsReturn {
    count: number;
    previousPage: string | null;
    nextPage: string | null;
    data: Product[];
}

export abstract class ProductRepository {
    abstract create(data: CreateProductDto): Promise<Product>;
    abstract findAll(
        name: string | undefined,
        stockMin: number | undefined,
        priceMin: number | undefined,
        priceMax: number | undefined,
        stockBy: 'asc' | 'desc' | undefined,
        priceBy: 'asc' | 'desc' | undefined,
        page: number | undefined,
        perPage: number | undefined,
    ): Promise<FindAllProductsReturn>;
    abstract findOne(id: string): Promise<Product>;
    abstract update(id: string, data:UpdateProductDto): Promise<Product>;
    abstract delete(id: string): Promise<void>;
}