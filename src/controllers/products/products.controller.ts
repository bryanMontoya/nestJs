import { Controller, Get, Param, Post, Put, Query, Body, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @Get('filter')
    @HttpCode(HttpStatus.OK)
    getProductFilter() {
      return  {
        message: 'Yo soy filter'
      };
    }

    @Get(':productId')
    @HttpCode(HttpStatus.OK)
    getProduct(@Param('productId', ParseIntPipe) productId: number) { //Todo lo que se recibe por url es string
        return this.productsService.findOne(productId); //ParseIntPipe: Transformación.
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getProductsPagination(
      @Query('limit') limit = 100,
      @Query('offset') offset = 0,
      @Query('brand') brand: string){
        return this.productsService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: any){
        return this.productsService.create(payload);
    }

    @Put()
    update(@Param('id') id: number, @Body() payload:any){
        return this.productsService.update(id, payload);
    }
}
