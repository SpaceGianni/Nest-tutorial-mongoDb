import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';

@Module({
    imports : [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers : [CoffeeController],
    providers : [CoffeeService],
    exports : [CoffeeService]
})
export class CoffeeModule {}
