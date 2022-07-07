import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-dependencyinjection-services-example',
  templateUrl: './dependencyinjection-services-example.component.html',
  styleUrls: ['./dependencyinjection-services-example.component.scss']
})
export class DependencyinjectionServicesExampleComponent implements OnInit {

  products!: Product[];
  productService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }
  ngOnInit(): void {
  }

}
