import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-ad-products',
  templateUrl: './ad-products.component.html',
  styleUrls: ['./ad-products.component.scss']
})
export class AdProductsComponent {

  products$: any;

  constructor(
    private prodSer: ProductService,
  ) {

    this.products$ = this.prodSer.getProducts().snapshotChanges().pipe(
      map(change => {
        return change.map((c) => ({ key: c.payload.key, ...(c.payload.val() as object) }))
      })
    );
    
  }



}
