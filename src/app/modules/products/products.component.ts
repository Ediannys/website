import { Component } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

	productList: ProductModel[] = [];

	constructor(private productListService: ProductListService) {}

	ngOnInit(): void {
		this.getAllProducts();
	}
  
	public getAllProducts(): void {
		this.productListService.getAllProducts().subscribe(
			data => {
				this.productList = data;
			},
			error => {
				console.log(error);
			}
		);
	}
}

