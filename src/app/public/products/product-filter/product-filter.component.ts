import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/categories/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  @Input('category') category: any;

  categories$: any;

  constructor(public categSer: CategoryService) {
    this.categories$ = this.categSer.getCategoriesWithKeys();
  }

}
