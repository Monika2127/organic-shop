import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  //  returns the observable while using valueChanges()
  getCategories() {
    return this.db.list('/categories');
  }

  getCategoriesWithKeys() {
    return this.db.list('/categories').snapshotChanges().pipe(
      map(change => {
        return change.map((c) => ({ key: c.payload.key, ...(c.payload.val() as object) }))
      })
    )
  }
   
}
