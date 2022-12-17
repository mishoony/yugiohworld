import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProduct =[] as any
  cominUp = [] as any
  newCard = [] as any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getUpcomingproduct().subscribe((value)=>{
      
      this.cominUp = value
      this.cominUp = this.cominUp.data.slice(0,5+1)


      
    })

    this.productService.getNewCards().subscribe((value)=>{

      this.newCard = value
      this.newCard = this.newCard.data.slice(0,5+1)
    })

    // this.productService.getAllProduct().subscribe((value)=>{
      
    //   this.allProduct = value
    //   this.allProduct = this.allProduct.data.slice(0,20)
      

    //   console.log(this.allProduct)

    //   for (let i = 0 ; i < this.allProduct.length ; i++ ){

    //     console.log(this.allProduct[i].card_images[0].image_url)
    //   }
      
    // })
  }

}
