import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from './schemas/producto.schema';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Producto.name,
        schema: ProductoSchema,
      },
    ]),
  ],
  providers: [ProductosService],
  controllers: [ProductosController],
})
export class ProductosModule {}
