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

  constructor(private router: Router, private authService: AuthService,private iotFirebase:FirebaseService) { }

  ngOnInit() {
  }
  
  

}
