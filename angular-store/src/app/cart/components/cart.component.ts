import { Component } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private _cartService: CartService){}
  products: Product[] = [];
  ngOnInit(): void {
    this._cartService.currentProducts$.subscribe((res)=>{
      this.products = res;
    })
  }

  onAdd(product:Product){
    this._cartService.onItemAdded(product);
    this._cartService.onCountIncrement();
  }

  onDelete(product:Product){
    this._cartService.onItemDeleted(product);
  }

}
