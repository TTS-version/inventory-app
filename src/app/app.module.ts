import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductImageComponent } from './product-image.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductRowComponent } from './product-row.component';
import { ProductsListComponent } from './products-list.component';
import { ProductDepartmentComponent } from './product-department.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductRowComponent,
    ProductsListComponent,
    ProductDepartmentComponent
    

    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
