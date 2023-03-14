import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';
import {  productsList } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl:string='http://localhost:3005/products';
   
  getAllProducts(){
    // return productsList;
    return this.http.get(this.baseUrl);
  }

  getProductByID(productId:number){
    // return productsList.filter((product) => product.id == productId)[0];
    return this.http.get(`${this.baseUrl}/${productId}`);
  }

  addProduct(product:any){
    return this.http.post(this.baseUrl, product);
  }

  editProduct(productId:any ,product:any){
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }

  deleteProductByID(productId:number){
    // const indexOfObject = productsList.findIndex((object) => {
    //   return object.id === productsList.filter((product) => product.id == productId)[0].id;
    // });
    // productsList.splice(indexOfObject, 1);
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}
