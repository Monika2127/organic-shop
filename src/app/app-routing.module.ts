import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ProductsComponent } from './public/products/products.component';
import { ShoppingCartComponent } from './public/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './public/check-out/check-out.component';
import { OrderSuccessComponent } from './public/order-success/order-success.component';
import { LoginComponent } from './logged-in/login/login.component';
import { AdProductsComponent } from './admin/ad-products/ad-products.component';
import { AdOrdersComponent } from './admin/ad-orders/ad-orders.component';
import { MyOrdersComponent } from './logged-in/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my/orders', component: MyOrdersComponent },

  //  routes for admin
  { path: 'admin/products', component: AdProductsComponent },
  { path: 'admin/orders', component: AdOrdersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
