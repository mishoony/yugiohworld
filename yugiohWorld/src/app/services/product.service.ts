import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct (){
    const allCards = this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    console.log(allCards)
    return allCards
  }

  getNewCards(){

    return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk')
  }

  getUpcomingproduct(){

      const upComingCards = this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
      return upComingCards
  }

  

}
