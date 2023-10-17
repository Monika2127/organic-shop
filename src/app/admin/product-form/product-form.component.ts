import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CategoryService } from 'src/app/services/categories/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  categories$!: any;
  productForm: any
  product: any = {};
  productId: any;

  constructor(
    private router: Router,
    public categorySer: CategoryService,
    private productSer: ProductService,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {

    this.productId = this.route.snapshot.paramMap['get']('id')
    if (this.productId) {
      this.productSer.getIdProduct(this.productId).subscribe(prod => this.product = prod);
    }

    this.categories$ = categorySer.getCategories().snapshotChanges().pipe(
      map(change => {
        return change.map((c) => ({ key: c.payload.key, ...(c.payload.val() as object) }))
      })
    );



    //  FOR REACTIVE FORMS

    //  make the validator async, otherwise working with some error in array
    // this.productForm = new FormGroup({
    //   title: new FormControl(''),
    //   price: new FormControl(''),
    //   category: new FormArray([]),
    //   imgUrl: new FormControl('')
    // })

    // this.categories$.forEach((item: any) => {
    //   let ele = fb.group({
    //     value: item
    //   })

    //   this.category.push(ele);
    // });


  }

  saveProduct(product: any) {
    //  if want to update
    if (this.productId) this.productSer.updateProduct(this.productId, product);
    //  if want to create
    else this.productSer.create(product);

    this.router.navigate(['/admin/products']);
  }

  deleteProduct() {
    if (!confirm('Are you sure you want to delete this product')) return;

    this.productSer.deleteProduct(this.productId)
    this.router.navigate(['/admin/products']);

    this.product = {};
  }



  get category() {
    return this.productForm.get('category') as FormArray;
  }


}
