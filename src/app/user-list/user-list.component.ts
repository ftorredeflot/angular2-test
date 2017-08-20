import { Component, OnInit } from '@angular/core';
import {CarPartComponent} from '../car-part/car-part.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 names:string[];
 prices;
 carParts:CarPartComponent[];
  totalpreu(){
   let sum=0;
   for(let price of this.prices){
     sum +=price.precio;
   }
   return sum;
  }
  constructor() {
    this.names=["ricard", "paco", "llauna", "nosequeponer"];
    this.prices=[{"precio":4.20,"patata":"TRUE"},{"precio":30,"patata":"TRUE"},{"precio":50,"patata":"TRUE"}];
    let c1= new CarPartComponent(5,"aa","aaaa","aa",80.50);
    this.carParts=[c1];

  }

  ngOnInit() {
  }

}
