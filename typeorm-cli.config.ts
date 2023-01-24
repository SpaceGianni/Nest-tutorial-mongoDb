import { Coffee } from "src/coffee/entities/coffee.entity";
import { Flavor } from "src/coffee/entities/flavor.entity/flavor.entity";
import { CoffeeRefactor1674581241634 } from "src/migrations/1674581241634-CoffeeRefactor";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1674581241634],
  });