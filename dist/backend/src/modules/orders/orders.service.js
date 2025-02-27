"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("./schemas/order.schema");
const products_service_1 = require("../products/products.service");
let OrdersService = class OrdersService {
    orderModel;
    productsService;
    constructor(orderModel, productsService) {
        this.orderModel = orderModel;
        this.productsService = productsService;
    }
    async create(createOrderDto) {
        const createdOrder = new this.orderModel(createOrderDto);
        return createdOrder.save();
    }
    async findAll() {
        return this.orderModel.find().populate('productIds').exec();
    }
    async findOne(id) {
        return this.orderModel.findById(id).populate('productIds').exec();
    }
    async update(id, updateOrderDto) {
        return this.orderModel
            .findByIdAndUpdate(id, updateOrderDto, { new: true })
            .populate('productIds')
            .exec();
    }
    async remove(id) {
        return this.orderModel.findByIdAndDelete(id).exec();
    }
    async getDashboardMetrics(startDate, endDate, categoryId) {
        const matchStage = {};
        if (startDate || endDate) {
            matchStage.date = {};
            if (startDate)
                matchStage.date.$gte = startDate;
            if (endDate)
                matchStage.date.$lte = endDate;
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
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        products_service_1.ProductsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map