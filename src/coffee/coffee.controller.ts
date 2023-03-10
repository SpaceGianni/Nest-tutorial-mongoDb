import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService:CoffeeService){}

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto){
        return this.coffeeService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        console.log(typeof id)
        return this.coffeeService.findOne(" " + id);
    }

    @Post()
    create(@Body() createCoffeeDto : CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeDto:UpdateCoffeeDto){
        return this.coffeeService.update(id,updateCoffeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.remove(id);
    }

}
