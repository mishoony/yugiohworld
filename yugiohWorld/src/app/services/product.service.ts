import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct (){
    const allCards = this.http.get('http://localhost:3000/api/products')
    console.log(allCards)
    return allCards
  }

  getNewCards(){

    return this.http.get('http://localhost:3000/api')
  }

  getUpcomingproduct(){

      const upComingCards = this.http.get('http://localhost:3000/api')
      return upComingCards
  }

  createProduct(productInfo:any){

    return this.http.post<IProduct>('http://localhost:3000/api/products/create',productInfo)

  }

}
