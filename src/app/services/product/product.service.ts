import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

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

  getProductsWithKeys() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(change => {
        return change.map((c) => ({ key: c.payload.key, ...(c.payload.val() as object) }))
      })
    )
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
