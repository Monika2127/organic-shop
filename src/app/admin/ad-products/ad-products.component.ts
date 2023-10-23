import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, map } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-ad-products',
  templateUrl: './ad-products.component.html',
  styleUrls: ['./ad-products.component.scss']
})
export class AdProductsComponent implements OnDestroy {

  products: Product[] = [];
  filteredProducts: any[] = [];
  prodSubscription!: Subscription;
  sortAsc: boolean = true;

  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()

  constructor(
    private prodSer: ProductService,
  ) {
    this.loadProducts();
  }

  loadProducts() {

    this.prodSubscription = this.prodSer.getProductsWithKeys().subscribe((item: any) => {
      this.filteredProducts = this.products = item;
    })

  }

  search(query: string) {
    //  for searching the query in the client side, we have to save the data in an array and then render it and search it in that
    //  array

    this.filteredProducts = query ?
      this.products.filter(item => item.title.toLowerCase().includes(query.toLowerCase())) :
      this.products
  }


  sortTable(event: Event): void {
    const target = event.target as HTMLElement;
    this.sortAsc = !this.sortAsc;

    if (target.tagName === 'TH') {
      const clickedHeader = target.innerText.toLowerCase(); // This will give you the text content of the clicked <th> element

      if (!clickedHeader) return;

      if (this.sortAsc)
        this.filteredProducts.sort((a, b) => a[clickedHeader] >= b[clickedHeader] ? 1 : -1)
      else
        this.filteredProducts.sort((a, b) => a[clickedHeader] < b[clickedHeader] ? 1 : -1)
    }
  }


  ngOnDestroy(): void {
    this.prodSubscription.unsubscribe();
  }



}
