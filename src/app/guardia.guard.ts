import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  async canActivate() {
    if (this.auth.logged) {
      return true;
    } else {
      return false;
    }
  }
}
