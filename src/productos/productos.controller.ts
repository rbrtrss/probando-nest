import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductoDto } from './dtos/producto.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productosService: ProductosService) {}

  @Get()
  async index() {
    return await this.productosService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.productosService.findById(id);
  }

  @Post()
  async create(@Body() createProductoDto: ProductoDto) {
    return await this.productosService.create(createProductoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductoDto: ProductoDto,
  ) {
    return await this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.productosService.delete(id);
  }
}
