import { Injectable, OnInit } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService implements OnInit {
  constructor() {}
  ngOnInit(): void {
      
  }
  public getProducts() {
    let products: Product[];

    products = [
      { productID: 1, name: 'Memory Card', price: 500 },
      { productID: 2, name: 'Pen Drive', price: 750 },
      { productID: 3, name: 'Power Bank', price: 100 },
      { productID: 4, name: 'Back Cover', price: 500 },
      { productID: 5, name: 'Charger', price: 350 },
    ];

    return products;
  }
}
