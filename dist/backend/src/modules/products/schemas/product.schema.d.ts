import { Document, Schema as MongooseSchema } from 'mongoose';
export type ProductDocument = Product & Document;
export declare class Product {
    name: string;
    description: string;
    price: number;
    categoryIds: MongooseSchema.Types.ObjectId[];
    imageUrl: string;
}
export declare const ProductSchema: MongooseSchema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Product & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
}>;
