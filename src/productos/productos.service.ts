import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductoDto } from './dtos/producto.dto';
import { Producto, ProductoDocument } from './schemas/producto.schema';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name) private productoModel: Model<ProductoDocument>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return await this.productoModel.find().exec();
  }

  async findById(id: string): Promise<Producto> {
    return await this.productoModel.findById(id).exec();
  }

  async create(createProductoDto: ProductoDto): Promise<Producto> {
    return await new this.productoModel({ ...createProductoDto }).save();
  }

  async update(id: string, updateProductoDto: ProductoDto): Promise<Producto> {
    return await this.productoModel
      .findByIdAndUpdate(id, updateProductoDto)
      .exec();
  }

  async delete(id: string): Promise<Producto> {
    return await this.productoModel.findByIdAndDelete(id).exec();
  }
}
