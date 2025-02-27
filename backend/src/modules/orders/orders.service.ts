import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private readonly productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().populate('productIds').exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).populate('productIds').exec();
  }

  async update(id: string, updateOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderModel
      .findByIdAndUpdate(id, updateOrderDto, { new: true })
      .populate('productIds')
      .exec();
  }

  async remove(id: string): Promise<Order> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }

  async getDashboardMetrics(startDate?: Date, endDate?: Date, categoryId?: string) {
    const matchStage: any = {};
    
    if (startDate || endDate) {
      matchStage.date = {};
      if (startDate) matchStage.date.$gte = startDate;
      if (endDate) matchStage.date.$lte = endDate;
    }

    const metrics = await this.orderModel.aggregate([
      { $match: matchStage },
      {
        $lookup: {
          from: 'products',
          localField: 'productIds',
          foreignField: '_id',
          as: 'products'
        }
      },
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalRevenue: { $sum: '$total' },
          averageOrderValue: { $avg: '$total' }
        }
      }
    ]).exec();

    return metrics[0] || {
      totalOrders: 0,
      totalRevenue: 0,
      averageOrderValue: 0
    };
  }
}
