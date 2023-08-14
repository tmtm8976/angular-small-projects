import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product';
import {data} from '../../../data' ;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = data

  constructor() { }

  ngOnInit(): void {
  }

}
