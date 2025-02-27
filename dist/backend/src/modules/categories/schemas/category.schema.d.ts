import { Document } from 'mongoose';
export type CategoryDocument = Category & Document;
export declare class Category {
    name: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category> & Category & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & {
    _id: import("mongoose").Types.ObjectId;
}>;
