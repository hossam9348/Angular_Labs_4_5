import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';
import {  productsList } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllProducts():Iproduct[]{
    return productsList;
  }

  getProductByID(productId:number):Iproduct{
    return productsList.filter((product) => product.id == productId)[0];
  }
}
