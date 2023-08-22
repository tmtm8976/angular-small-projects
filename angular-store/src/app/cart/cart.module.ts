import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from "./components/cart.component";


@NgModule({
    declarations:
    [
        CartComponent
    ],
    imports: [

        CommonModule,
        CartRoutingModule
    ]
})

export class CartModule {}