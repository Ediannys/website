import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  public title = "";
  public myThumbnail = "";
  public myFullresImage = "";

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getZoomProduct()
  }

  public getZoomProduct(): void {
    this.productListService.getZoomProduct().subscribe(data => {
      this.myThumbnail = data.thumbImage;
      this.myFullresImage = data.fullImage
    }, error => { console.log(error) })
  }

}
