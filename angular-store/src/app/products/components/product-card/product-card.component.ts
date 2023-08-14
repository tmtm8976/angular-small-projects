import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../product';
import {data} from '../../../data' ;

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        console.log(id); // log the id only if it exists
        this.product = data[id-1]
      }
    });
  }

  routeToCart() {
    // this._router.navigateByUrl('/auth');
    this._router.navigate(['/cart']);
  }
}