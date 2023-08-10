import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';

import { ProductsService } from './../../products/services/products.service';

@Injectable()
export class UsersService {
    constructor(private productsService: ProductsService) {}
    private users: User[] = [
        {
            id: 1,
            email: 'correo@email.com',
            password: '12345',
            role: 'admin',
        },
    ];

    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    findAll() {
        return `This action returns all users`;
    }

    findOne(id: number) {
        return this.users.find((item) => item.id === id);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }

    getOrdersByUser(id: number): Order {
        const user = this.findOne(id);
        return {
            date: new Date(),
            user,
            products: this.productsService.findAll(),
        };
    }
}
