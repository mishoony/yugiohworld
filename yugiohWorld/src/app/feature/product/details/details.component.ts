import { query } from '@angular/animations';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private productService:ProductService) { }

  cardInfo ={} as any
  ngOnInit(): void {
    const allCards = this.productService.getAllProduct()
  }

}
