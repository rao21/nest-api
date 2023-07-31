import { Module } from '@nestjs/common';
import { CoffeesController } from 'src/coffees/coffees.controller';
import { CoffeesService } from 'src/coffees/coffees.service';

@Module({ 
    imports:[CoffeeModule],
    controllers:[CoffeesController],
    providers:[CoffeesService]
})
export class CoffeeModule {}
