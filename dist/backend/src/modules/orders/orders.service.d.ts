import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { ProductsService } from '../products/products.service';
export declare class OrdersService {
    private orderModel;
    private readonly productsService;
    constructor(orderModel: Model<OrderDocument>, productsService: ProductsService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    update(id: string, updateOrderDto: CreateOrderDto): Promise<Order>;
    remove(id: string): Promise<Order>;
    getDashboardMetrics(startDate?: Date, endDate?: Date, categoryId?: string): Promise<any>;
}
