import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('filter')
    getProductFilter() {
      return  {
        message: 'Yo soy filter'
      };
    }

    @Get(':productId')
    getProduct(@Param('productId') productId: string) {
      return  {
        message: `product ${productId}`
      };

    }


    @Get()
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
    create(@Body() payload: any){
        return {
            message: 'accion de crear',
            payload
        };
    }
}
