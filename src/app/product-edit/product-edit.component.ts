import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: number =0;
  product: any;

  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService, private router:Router){
    //  this.productId =Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap.subscribe(hoss=>{
      this.productId = Number(hoss.get('id'));
      this.productForm.controls['price'].setValue('');
      this.productForm.controls['imgUrl'].setValue('');
      this.productForm.controls['productName'].setValue('');
      this.productForm.controls['quantity'].setValue('');
    });
  }
  ngOnInit(): void {
    if(this.productId!=0){
    this.productService.getProductByID(this.productId).subscribe((response)=>{this.product=response;
    this.productForm.controls['price'].setValue(this.product.price);
    this.productForm.controls['imgUrl'].setValue(this.product.imgUrl);
    this.productForm.controls['productName'].setValue(this.product.productName);
    this.productForm.controls['quantity'].setValue(this.product.quantity);
    })}
  }
  
  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
   imgUrl: new FormControl('', Validators.required),
  })

  submitForm(e:any){
    e.preventDefault();
    if(this.productForm.status === 'VALID'){
      if(this.productId== 0){
        this.productService.addProduct(this.productForm.value).subscribe();
      }else{
        this.productService.editProduct(this.productId, this.productForm.value).subscribe();
      }
      this.router.navigate(['/products']);
    }
  }
}
