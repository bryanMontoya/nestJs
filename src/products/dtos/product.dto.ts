import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsUrl,
    IsPositive,
    IsEmail,
    IsDate } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types'; //toma dto base pero pone opcional las validaciones.0

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {} //No pone campos obligatorios pero si validaciones
