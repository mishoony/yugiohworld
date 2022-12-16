import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }


  register(){

    const user ={
      "name":"John Doe",
      "email":"john@email.com",
      "username":"Johny",
      "password":"12345",
      "rePassword":"12345"
  }
  console.log(user)
    this.http.post('https://localhost:3000/api/users/register',user)
  }
}
