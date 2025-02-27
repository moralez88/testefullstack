import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().populate('categoryIds').exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).populate('categoryIds').exec();
  }

  async update(id: string, updateProductDto: CreateProductDto): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .populate('categoryIds')
      .exec();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
