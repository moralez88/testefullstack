import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: CreateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
}
