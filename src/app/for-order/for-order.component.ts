import { Component, OnInit } from '@angular/core';
import { ProdName } from '../models/prod-name';

@Component({
  selector: 'app-for-order',
  templateUrl: './for-order.component.html',
  styleUrls: ['./for-order.component.css']
})
export class ForOrderComponent implements OnInit {
  public product: ProdName[] = [
    {
      id: 1,
      type: 'oak',
      quantity: 1,
      price: 20
    },
    {
      id: 2,
      type: 'oak',
      quantity: 1,
      price: 30
    },
    {
      id: 3,
      type: 'walnut',
      quantity: 1,
      price: 25
    },
    {
      id: 4,
      type: 'walnut',
      quantity: 1,
      price: 35
    },
    {
      id: 5,
      type: 'beech',
      quantity: 1,
      price: 15
    },
    {
      id: 6,
      type: 'beech',
      quantity: 1,
      price: 20
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  

}
