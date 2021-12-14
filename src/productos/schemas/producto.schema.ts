import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  cateogria: string;

  @Prop()
  precio: number;

  @Prop()
  stock: number;

  @Prop([String])
  fotos: string[];
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
