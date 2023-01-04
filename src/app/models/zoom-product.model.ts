import { SizeModel } from "./size.model"

export interface ZoomProductModel {
    thumbImage: string,
    fullImage: string,
    sizes: SizeModel[],
    colors: string[],
    name: string,
    price: string,
    description: string,
    productDetail: string,
    technology: string
}

