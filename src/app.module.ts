import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeModule } from './coffee/coffee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [CoffeeModule, TypeOrmModule.forRoot({
    type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5434, // database host
      username: 'postgres', // username
      password: 'postgres', // user password
      database: 'postgres', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically 
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
  }), CoffeeRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
