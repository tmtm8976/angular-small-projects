import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
  }
  count: number = 0;
  countSource$ = new BehaviorSubject(this.count);
  currentCount$ = this.countSource$.asObservable();

  product: Product[] = [];
  productSource$ = new BehaviorSubject(this.product);
  currentProducts$ = this.productSource$.asObservable();

  onCountIncrement(){
    this.countSource$.next(++this.count)
  }

  onItemAdded(item: Product){
    const index = this.product.findIndex((prod) => prod.id === item.id);

    if (index === -1) {
      item.quantity = 1;
      this.product.push(item);
    } else {
      ++this.product[index].quantity;
    }
    this.productSource$.next(this.product);
  }

  onItemDeleted(item: Product){
    const index = this.product.findIndex((prod) => prod.id === item.id);

    if (index === -1) {
      return
    } else if(this.product[index].quantity>1) {
      --this.product[index].quantity;
      this.onCountDecrement();
    }
    else{
      this.product.splice(index,1);
      console.log(this.product, index);
      this.onCountDecrement();
    }
  }

  onCountDecrement(){
    this.countSource$.next(--this.count)
  }

}
