import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/filter')
  getProductFilter() {
    return  'Yo soy filter';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return  `product ${productId} `;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('categoryId') categoryId: string) {
    return `product ${productId} and category ${categoryId}`;
  }

  @Get('products')
  getProductsPagination(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string)
    {
    return `products limit ${limit} and offset ${offset} and brand ${brand}`;
  }
}
