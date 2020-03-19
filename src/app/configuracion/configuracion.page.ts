import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  user: any;
  username: any;
  email: any;
  photo: any;
  constructor(private router: Router, private authService: AuthService,private iotFirebase:FirebaseService) {
    this.user = localStorage.getItem('user');
    this.username = JSON.parse(this.user).displayName;
    this.email = JSON.parse(this.user).email;
    this.photo = JSON.parse(this.user).photoURL;
   }

  ngOnInit() {
  }
}
