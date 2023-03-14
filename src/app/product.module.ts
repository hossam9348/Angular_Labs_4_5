import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [  { path: 'products', canActivate:[AuthGuard], component: ProductsComponent },
{ path: 'products/:id', canActivate:[AuthGuard], component: ProductDetailsComponent },
{ path: 'products/edit/:id', canActivate:[AuthGuard], component: ProductEditComponent },
{ path: 'products/delete/:id', canActivate:[AuthGuard], component: ProductDeleteComponent},];
@NgModule({
  declarations: [ProductsComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductDeleteComponent,],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class ProductModule { }
