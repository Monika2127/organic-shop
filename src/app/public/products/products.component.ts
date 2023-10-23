import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  prodSubscription!: Subscription;
  catSubscription!: Subscription;
  category!: string | null;

  constructor(
    public prodSer: ProductService,
    private routes: ActivatedRoute
  ) {

    routes.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = this.category ? this.getFilterProduct(this.category) : this.products;
    })

    this.loadProducts()
  }

  loadProducts() {
    this.prodSubscription = this.prodSer.getProductsWithKeys().subscribe((item: any) => {
      this.filteredProducts = this.products = item;
    })

  }
  
  getFilterProduct(category: any) {
    return this.products.filter(item => item.category === category)
  }

  ngOnDestroy(): void {
    this.prodSubscription.unsubscribe();
  }

}
