import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      }
    ]
  }]



@NgModule({
  declarations: [
    DefaultComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[RouterModule]
})
export class DefaultModule { }
