import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    getDashboardMetrics(startDate?: string, endDate?: string, categoryId?: string): Promise<any>;
    findOne(id: string): Promise<Order>;
    update(id: string, updateOrderDto: CreateOrderDto): Promise<Order>;
    remove(id: string): Promise<Order>;
}
