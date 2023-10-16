import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
    return this.db.list('/products').push(product)
  }

  getProducts() {
    return this.db.list('/products');
  }

  getIdProduct(productId: any) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  updateProduct(productId: any, product: any) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId: any) {
    return this.db.object('/products/' + productId).remove();
  }
}
