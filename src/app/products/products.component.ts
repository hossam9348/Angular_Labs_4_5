import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
     this.productService.getAllProducts().subscribe((response)=>{this.products=response});
  }
}
