import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild(
    NgForm,
    { static: true }
  )
  form!: ElementRef<HTMLInputElement>

  constructor(private router:Router,private authService: AuthService) { }


  onSubmit(form: NgForm): void {

    const { username, password, email } = form.value

    console.log(username, password, email)


    this.authService.register(username, password, email).subscribe((value)=>{

      console.log("sucsses")
    })

    
  }

}
