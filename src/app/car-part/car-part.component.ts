import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-part',
  templateUrl: './car-part.component.html',
  styleUrls: ['./car-part.component.css']
})
export class CarPartComponent implements OnInit {
  id: number;
  name:string;
  description:string;
  inStock:string;
  price:number;

  constructor(id:number,  name:string,  description:string,  inStock:string,  price:number) {
    this.id=id;
    this.name=name;
    this.description=description;
    this.inStock=inStock
    this.price=price;
  }

  ngOnInit() {
  }

}
