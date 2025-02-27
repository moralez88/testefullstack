import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Category' }] })
  categoryIds: MongooseSchema.Types.ObjectId[];

  @Prop()
  imageUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
