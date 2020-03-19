import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  constructor(private router: Router, protected authService: AuthService) {

   }

  login() {
    this.authService.loginFirebase(this.email, this.password).
      then((res) => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
          this.router.navigateByUrl(redirect);
      } else {
        alert('Incorrect user');
      }
    });
  }
  ngOnInit() {}

}
