import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {  
  productId: number =0;

  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService, private router:Router,){}
  ngOnInit(): void {
    this.productId =Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.deleteProductByID(this.productId).subscribe();
    this.router.navigate(['/products']);
  }
}

