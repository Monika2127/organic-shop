import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { AppComponent } from './app.component';
import { LoginComponent } from './logged-in/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './public/products/products.component';
import { CheckOutComponent } from './public/check-out/check-out.component';
import { OrderSuccessComponent } from './public/order-success/order-success.component';
import { ShoppingCartComponent } from './public/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './logged-in/my-orders/my-orders.component';
import { AdProductsComponent } from './admin/ad-products/ad-products.component';
import { AdOrdersComponent } from './admin/ad-orders/ad-orders.component';
import { env } from 'src/environments/environments';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user-object/user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './services/categories/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product/product.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShoppingCartComponent,
    BsNavbarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdProductsComponent,
    AdOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebase, 'organic-shop'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
