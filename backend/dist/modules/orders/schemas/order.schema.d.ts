import { Document, Schema as MongooseSchema } from 'mongoose';
export type OrderDocument = Order & Document;
export declare class Order {
    date: Date;
    productIds: MongooseSchema.Types.ObjectId[];
    total: number;
}
export declare const OrderSchema: MongooseSchema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & {
    _id: import("mongoose").Types.ObjectId;
}>;
