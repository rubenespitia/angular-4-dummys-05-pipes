import { Pipe, PipeTransform } from "@angular/core";

//nombre | toggleCase ='NOMBRE'
//nombre | toggleCase = 'fernando'


@Pipe({
    name:'canFly'
})

export class CanFlyPipe implements PipeTransform{

    transform(value:boolean):'vuela'|'no vuela'{
        return (value) ? 'vuela' : 'no vuela';
    }

}
