import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
email:any;
password:any
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onAddUser(){
    this.authService.registrarUsuario(this.email, this.password).
    then((res)=>{
      this.router.navigate(['/home']);
    }).catch(err => console.log('err', err.message));
  }

}
