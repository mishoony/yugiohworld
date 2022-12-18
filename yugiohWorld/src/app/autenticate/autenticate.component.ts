import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.css']
})
export class AutenticateComponent implements OnInit {

  isAutent = true

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getProfile().subscribe({
      next:(user)=>{
        
        this.authService.user = user

        this.isAutent = false
      },
      error: ()=>{
        this.authService.user = null
        this.isAutent = false
      }
    })
  }

}
