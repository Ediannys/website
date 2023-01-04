import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { SizeModel } from 'src/app/models/size.model';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  public title = "";
  public myThumbnail = "";
  public myFullresImage = "";
  public colors = [""];
  public sizes?: SizeModel[];
  public name = "";
  public price = "";
  public description = "";
  public productDetail ="";
  public technology = "";


  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getZoomProduct()
  }

  public getZoomProduct(): void {
    this.productListService.getZoomProduct().subscribe(data => {
      this.myThumbnail = data.thumbImage;
      this.myFullresImage = data.fullImage
      this.colors = data.colors;
      this.sizes = data.sizes;
      this.name = data.name;
      this.price = data.price;
      this.description = data.description;
      this.productDetail = data.productDetail;
      this.technology = data.technology
      
    }, error => { console.log(error) })
  }

}
