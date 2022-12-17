import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient, private router:Router) { }

  user:IUser| null = null

  get isLoggedIn(){
    return this.user !== null
  }


  register(username:string , password:string, email:string){

  //   this.login(password,username)

    
  // }

  
    return this.http.post('http://localhost:3000/api/register',{username , password, email})}


  login(password:string,username:string){

    
    
    
    return this.http.post<any>('http://localhost:3000/api/login',{username,password})
  }
  logout(){

    this.user = null

    this.router.navigate(['/'])

    // return this.http.post('https://reqres.in/api/login',{email,password})
  }


}
