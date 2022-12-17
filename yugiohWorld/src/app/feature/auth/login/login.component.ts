import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmite(form: NgForm): void {

    const { password, username } = form.value

    this.authService.login(password!, username!).subscribe(user => {
      this.authService.user =user

      this.router.navigate(['/'])


    })

  }

}
