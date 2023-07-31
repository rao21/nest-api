
import { Body, Controller ,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res} from '@nestjs/common';
import { off } from 'process';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService:CoffeesService){}
@Get()
findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll;

}
@Get(':id')
findOne(@Param('id') id?:string) {
    return this.coffeesService.findOne(id);
}
@Post()
create(@Body() CreateCoffeeDto : CreateCoffeeDto){
    console.log(CreateCoffeeDto);
    return this.coffeesService.create(CreateCoffeeDto);
}

@Patch(':id')
update(@Param('id') id:string,@Body() updateCoffeeDto : UpdateCoffeeDto){
    return this.coffeesService.update(id,updateCoffeeDto);
}

@Delete(':id')
delete(@Param('id') id:string,@Body() body){
    return this.coffeesService.remove(id);
}
}
