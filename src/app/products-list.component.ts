import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Product } from './product';

@Component({
    selector:'products-list',
    templateUrl:'products-list.component.html',
    styleUrls:['products-list.component.css'],
    inputs:['productsList']
})

export class ProductsListComponent{
    productsList:Product[];
    @Output() productSelected:EventEmitter<Product>;
    currentProduct:Product =null;

    constructor(){
        this.productSelected=new EventEmitter();

    }
    noProductClicked(Product:Product){
        this.currentProduct=Product;
        console.log('product:'+Product.name+'is selected')
        this.productSelected.emit(Product);

    }
    isSelected(product:Product){
        if(this.currentProduct===null||product===null){
            return false;
        }
        return product.sku===this.currentProduct.sku;
    }

}