import { Component } from '@angular/core';
import {interval, tap} from 'rxjs'

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18n Select
  public name: string ='Fernando';
  public gender: 'male'|'female'|'no existe' = 'male'


  public invitationMap={
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name= 'Melissa',
    this.gender = 'female'
  }


  //i18n Plural
  public clients: string[] = ['Maria','Pedro','Fernando'];

  deleteClient():void{
    this.clients.shift();
  }

  public clientsMap ={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando',
  }

  ///Key Value Pipe
  public person={
    name: 'Fernando',
    age: 30,
    address: 'Calle falsa 123'
  }

  //Async Pipe
  /*public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promisValue: Promise<string>= new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    },3500);

  });*/

}
