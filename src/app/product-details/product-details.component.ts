import { Iproduct } from 'src/app/iproduct';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productId: number =0;
product: null | Iproduct = null;
constructor(private activatedRoute: ActivatedRoute, private productService: ProductService){}
  ngOnInit(): void {
    this.productId =Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductByID(this.productId);
  }
}
