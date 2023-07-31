import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees:Coffee[] = [
        {
            id:1,
            name:'Lattee',
            brand:'NestCafe',
            flavors:['choclate']
        }
    ];

    findAll(){
        return this.coffees;
    }

     findOne(id:string){

        const coffee = this.coffees.find(item => item.id == +id);
        if(!coffee){
            throw new NotFoundException(`Coffe with #${id} not found`);
        }
        return coffee;
    }

    create(createCoffeedto:any){
       var a = this.coffees.push(createCoffeedto);
       return a;
    }

    update(id:string,updateCoffeDto:any){
        const existCoffee = this.findOne(id);
        if(existCoffee){
            return 'coffee delted'
        }else{
            return `No Coffee exit with ${id}`
        }
    }
    remove(id:string){
        const coffeIndex = this.coffees.findIndex(iitrem=>iitrem.id === +id);
        if(coffeIndex >=0){
            this.coffees.splice(coffeIndex,1)
        }
    }
}
