import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
