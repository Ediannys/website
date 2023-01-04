import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList?: ProductModel[];
  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  public getAllProducts(): void {
    this.productListService.getAllProducts().subscribe(data => {
      this.productList = data;
    }, error => { console.log(error) })

  }
}
