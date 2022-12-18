import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  allProduct =[] as any

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProduct().subscribe(value =>{
      console.log(value)

      this.allProduct = value
    })
  }

}
