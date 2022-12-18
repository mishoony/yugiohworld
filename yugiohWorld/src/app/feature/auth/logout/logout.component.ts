import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) {
    
  }

  ngOnInit(): void {

    this.authService.logout().subscribe({
      
      next:()=> {
        this.authService.user = null
        this.route.navigate(['/'])
    },
    error:()=> {
      this.authService.user = null
      this.route.navigate(['/'])
  },
    })
      
  }

}
