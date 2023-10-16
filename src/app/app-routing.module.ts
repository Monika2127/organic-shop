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
import { authGuard } from './services/auth-guard/auth-guard.guard';
import { adminsGuard } from './services/admin-guard/admins.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  //  routes for normal users
  { path: 'check-out', component: CheckOutComponent, canActivate: [authGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [authGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [authGuard] },

  //  routes for admin
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [authGuard, adminsGuard] },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [authGuard, adminsGuard] },
  { path: 'admin/products', component: AdProductsComponent, canActivate: [authGuard, adminsGuard] },
  { path: 'admin/orders', component: AdOrdersComponent, canActivate: [authGuard, adminsGuard] },
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
