import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ZoomProductModel } from '../models/zoom-product.model';
import { Observable } from "rxjs";

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

const ZOOM_PRODUCT: ZoomProductModel = {
  thumbImage: "https://pixabay.com/get/g28efdd29cf24a9bc6f73799d8b831674522a2d8323ff38895ad5edf1262cc504402b75891f895598e3dc114719c7229b5f22b4376a6a0bbec8e1bc8ddf9b8333418e6462c2278d0a090a55eccd06692d_640.jpg",
  fullImage: "https://pixabay.com/get/g3f1930784f77e0623ffdd40c919d842cb1c69cc7c83c43cc97a32f1e4cd0e7a75ff79f7e163e4c8d393432609abac2e25eedb36355525fa333ecc55a858e41c07c73c4299909a71a9d62c2d9339907e6_1920.jpg",
  sizes: [
    {
      number: "5",
      color: "#C8C6CA"
    },
    {
      number: "5.5",
      color: "#C8C6CA"
    },
    {
      number: "6",
      color: "#E8E8E9"
    }, {
      number: "6.5",
      color: "#C8C6CA"
    }, {
      number: "7",
      color: "#C8C6CA"
    }, {
      number: "7.5",
      color: "#C8C6CA"
    }, {
      number: "8",
      color: "#C8C6CA"
    }, {
      number: "8.5",
      color: "#C8C6CA"
    }, {
      number: "9",
      color: "#C8C6CA"
    }, {
      number: "9.5",
      color: "#C8C6CA"
    }],
  colors: ["https://pixabay.com/get/g28efdd29cf24a9bc6f73799d8b831674522a2d8323ff38895ad5edf1262cc504402b75891f895598e3dc114719c7229b5f22b4376a6a0bbec8e1bc8ddf9b8333418e6462c2278d0a090a55eccd06692d_640.jpg"],
  name: "zapatilla hombre pelikan",
  price: "$00.000",
  description: "Cod. de producto zap 005",
  productDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  technology: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
}

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  constructor() { }

  public getAllProducts(): Observable<ProductModel[]> {
    let data = new Observable<ProductModel[]>(observer => {
      observer.next(PRODUCT_DATA)
      observer.complete()
    })
    return data;
  }

  public getZoomProduct(): Observable<ZoomProductModel> {
    let zoom = new Observable<ZoomProductModel>(observer => {
      observer.next(ZOOM_PRODUCT)
      observer.complete()
    })
    return zoom;
  }
}
