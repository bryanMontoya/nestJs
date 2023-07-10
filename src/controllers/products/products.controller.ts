import { Controller, Get, Param, Post, Query, Body, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('filter')
    @HttpCode(HttpStatus.OK)
    getProductFilter() {
      return  {
        message: 'Yo soy filter'
      };
    }

    @Get(':productId')
    @HttpCode(HttpStatus.OK)
    getProduct(@Param('productId') productId: string) {
      return  {
        message: `product ${productId}`
      };
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getProductsPagination(
      @Query('limit') limit = 100,
      @Query('offset') offset = 0,
      @Query('brand') brand: string)
      {
      return {
        message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
      };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: any){
        return {
            message: 'accion de crear',
            payload
        };
    }
}
