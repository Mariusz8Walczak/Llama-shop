import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    category: string;

    @Prop()
    price: number;

    @Prop()
    image_url: string;

    @Prop()
    short_description: string;

    @Prop()
    stock_status: string;

    @Prop({ default: Date.now })
    created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
