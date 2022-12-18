import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-crate-product',
  templateUrl: './crate-product.component.html',
  styleUrls: ['./crate-product.component.css']
})
export class CrateProductComponent  {

  constructor(private productService:ProductService) { }


  onSubmit(form:NgForm){

    const productInfo = form.value

    console.log(form.value)

    this.productService.createProduct(productInfo).subscribe(value =>{

      console.log(value)
    })
  }

}
