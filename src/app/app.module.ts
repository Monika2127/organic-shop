import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './public/products/products.component';
import { CheckOutComponent } from './public/check-out/check-out.component';
import { OrderSuccessComponent } from './public/order-success/order-success.component';
import { ShoppingCartComponent } from './public/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './logged-in/my-orders/my-orders.component';
import { AdProductsComponent } from './admin/ad-products/ad-products.component';
import { AdOrdersComponent } from './admin/ad-orders/ad-orders.component';
import { LoginComponent } from './logged-in/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    BsNavbarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdProductsComponent,
    AdOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
