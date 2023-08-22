import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import {data} from '../../../data' ;
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute, 
    private _router: Router,
    private _http: HttpClient,
    private _cartService: CartService
    ) {}

    productId! : string;

  ngOnInit(): void {
    this.productId=this.route.snapshot.queryParams['id'];
    console.log(this.productId);
    

    this._http
    .get(`https://fakestoreapi.com/products/${this.productId}`)
    .subscribe({
      next:(res: Product)=>{
        console.log(res);
        this.product = res;
        
      },
    });
    
  }

  onAddToCart(){
    this._cartService.onCountIncrement();
    this._cartService.onItemAdded(this.product)
  }
}