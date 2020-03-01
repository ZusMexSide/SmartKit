import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  user:any;
  constructor(private authServices: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    let url = state.url
    return this.checkLogin(url);
  }
  checkLogin(url):boolean{
    if(localStorage.getItem('user')!='null'){
      return true
    }
    this.authServices.redirectUrl = url;
    this.router.navigate(['login']);
    return false;
  }
}
