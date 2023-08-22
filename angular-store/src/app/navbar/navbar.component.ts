import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count!: number;
  constructor(private _router: Router, private _cartService: CartService) 
  {
      this._cartService.currentCount$.subscribe({
        next: (count: number) => {
          this.count = count;
        },
        error: (error)=>{
          console.log(error);
        },
      })
  }
  routeToLogin() {
    this._router.navigateByUrl('/auth');
    // this._router.navigate(['/auth']);
  }
}
