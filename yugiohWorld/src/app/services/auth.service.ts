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

  
    return this.http.post<IUser>('http://localhost:3000/api/register',{username , password, email})}


  login(password:string,username:string){

    
    
    
    return this.http.post<IUser>('http://localhost:3000/api/login',{username,password})
  }
  logout(){

    return this.http.post('http://localhost:3000/api/logout',{})

    this.router.navigate(['/'])

    
  }

  getProfile(){

    return this.http.get<IUser>('http://localhost:3000/api/users/profile')
  }


}
