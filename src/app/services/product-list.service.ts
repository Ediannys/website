import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

const PRODUCT_DATA: ProductModel[] = [
  {
    name: "Zapato azul",
    price: 5000,
    reference: "G40",
    picture: "1.jpg"
  }, {
    name: "Zapato rojo",
    price: 5000,
    reference: "G40",
    picture: "2.jpg"
  }, {
    name: "Zapato verde",
    price: 5000,
    reference: "G40",
    picture: "3.jpg"
  }, {
    name: "Zapato gris",
    price: 5000,
    reference: "G40",
    picture: "4.jpg"
  }, {
    name: "Zapato cafe",
    price: 5000,
    reference: "G40",
    picture: "5.jpg"
  }, {
    name: "Zapato miel",
    price: 5000,
    reference: "G40",
    picture: "6.jpg"
  }, {
    name: "Zapato aguamarina",
    price: 5000,
    reference: "G40",
    picture: "7.jpg"
  }, {
    name: "Zapato piel",
    price: 5000,
    reference: "G40",
    picture: "8.jpg"
  }, {
    name: "Zapato perla",
    price: 5000,
    reference: "G40",
    picture: "9.jpg"
  }, {
    name: "Zapato marinado",
    price: 5000,
    reference: "G40",
    picture: "10.jpg"
  }, {
    name: "Zapato azul1",
    price: 5000,
    reference: "G40",
    picture: "11.jpg"
  }, {
    name: "Zapato azul2",
    price: 5000,
    reference: "G40",
    picture: "12.jpg"
  }, {
    name: "Zapato azul3",
    price: 5000,
    reference: "G40",
    picture: "13.jpg"
  }, {
    name: "Zapato azul4",
    price: 5000,
    reference: "G40",
    picture: "14.jpg"
  }, {
    name: "Zapato azul5",
    price: 5000,
    reference: "G40",
    picture: "15.jpg"
  }, {
    name: "Zapato azul6",
    price: 5000,
    reference: "G40",
    picture: "16.jpg"
  }, {
    name: "Zapato azul7",
    price: 5000,
    reference: "G40",
    picture: "17.jpg"
  }, {
    name: "Zapato azul8",
    price: 5000,
    reference: "G40",
    picture: "18.jpg"
  }, {
    name: "Zapato azul9",
    price: 5000,
    reference: "G40",
    picture: "19.jpg"
  }, {
    name: "Zapato azul10",
    price: 5000,
    reference: "G40",
    picture: "20.jpg"
  }
]

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  constructor() { }

  public getNewProducts(): Array<ProductModel> {
    return PRODUCT_DATA;
  }
}
