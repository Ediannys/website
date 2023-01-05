import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ScrollService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent {
  @Input() productList: ProductModel[] = [];
  public position = 0.01;
  constructor(private scrollService: ScrollService) {
  }
  public next(element:string){
    this.position+= 0.02;
    this.scrollService.scrollRight(element,this.position);
  }
  public previous(element:string){
    this.position-= 0.02;
    this.scrollService.scrollRight(element,this.position);
  }
}
