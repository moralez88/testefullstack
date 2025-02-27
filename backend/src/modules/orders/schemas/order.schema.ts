import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, type: Date, default: Date.now })
  date: Date;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  productIds: MongooseSchema.Types.ObjectId[];

  @Prop({ required: true, min: 0 })
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
