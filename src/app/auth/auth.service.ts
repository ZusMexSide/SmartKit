import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  isLoggedIn = false;
  redirectUrl: string;
  token:any
  constructor(private authService: AngularFireAuth, private router: Router) {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null)
      }
    })
  }

  registrarUsuario(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    })
  }
  async loginFirebase(email: any, password: any) {
    try {
      await this.authService.auth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    } catch (e) {
      alert(e.messagge)
    }
  }
  async logOutFirebase() {
    try {
      await this.authService.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login'])
    } catch (e) {
      alert(e.messagge)
    }
  }
  async loginWithInstance(login) {
    try {
      await this.authService.auth.signInWithPopup(login).then((res) => {
        console.log('your logged in' + JSON.stringify(res));
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
      })
    } catch (e) {

    }
  }
  async loginWithFacebook() {
    var provider = new auth.FacebookAuthProvider();
    this.loginWithInstance(provider);    
  }
  loginWithGoogle() {
    var provider = new auth.GoogleAuthProvider();
    this.loginWithInstance(provider)
  }
  loginWithGitHub() {
    var provider = new auth.GithubAuthProvider();
    this.loginWithInstance(provider)
  }
  loginWithTwitter(){
    var provider = new auth.TwitterAuthProvider();
    this.loginWithInstance(provider)
  }
  logOut():void{
    this.isLoggedIn=false;
  }
}
