import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 names:string[];
 prices;
  totalpreu(){
   let sum=0;
   for(let price of this.prices){
     sum +=price.precio;
   }
   return sum;
  }
  constructor() {
    this.names=["ricard", "paco", "llauna", "nosequeponer"]
    this.prices=[{"precio":4.20,"patata":"TRUE"},{"precio":30,"patata":"TRUE"},{"precio":50,"patata":"TRUE"}]

  }

  ngOnInit() {
  }

}
