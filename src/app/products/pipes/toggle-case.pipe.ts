import { Pipe, PipeTransform } from "@angular/core";

//nombre | toggleCase ='NOMBRE'
//nombre | toggleCase = 'fernando'


@Pipe({
    name:'toggleCase'
})

export class ToggleCasePipe implements PipeTransform{

    transform(value:String, toUpper: boolean = false):string{
        console.log({value, toUpper});
        return (toUpper) ? value.toUpperCase() : value.toLowerCase();
    }

}
