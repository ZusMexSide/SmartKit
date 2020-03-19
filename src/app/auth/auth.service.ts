import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import * as firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  dataUser: any;
  isLoggedIn = false;
  redirectUrl: string;
  token: any;
  logged: boolean;
  constructor(private authService: AngularFireAuth,
              private router: Router,
              private storage: NativeStorage,
              private fb: Facebook) {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log('data del authstate true', JSON.stringify(this.user));
        this.storage.setItem('user', this.user);
        this.isLoggedIn = true;
      } else {
        console.log('data del authstate false', JSON.stringify(this.user));
        this.storage.setItem('user', null);
        this.isLoggedIn = false;
      }
    });
    this.logged = false;
  }
  async facebook() {
    let permissions = new Array<string>();
    permissions = ['public_profile', 'email'];
    this.fb.login(permissions).then(
      response => {
        console.log(response);
        const userId = response.authResponse.userID;
        const facebookCredential = auth.FacebookAuthProvider.credential(
          response.authResponse.accessToken
        );
        this.authService.auth
          .signInWithCredential(facebookCredential)
          .then(res => {
            console.log(JSON.stringify(res), 'exitoso');
          })
          .catch(err => {
            console.log(JSON.parse(err), 'failed');
          });
        this.fb.api('/me?fields=name, email', permissions).then(user => {
          user.picture =
            'https://graph.facebook.com/' + userId + '/picture?type=large';
          this.storage
            .setItem('user', {
              name: user.name,
              email: user.email,
              picture: user.picture
            })
            .then(() => {
              this.logged = true;
              this.router.navigate(['/home']);
            },
              error => {
                console.log(error);
              }
            );
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  async checkSession(): Promise<boolean> {
    let value: boolean;
    await this.storage.getItem('user').then(() => {
      value = true;
      this.logged = true;
    }).catch(() => {
      value = false;
      this.logged = false;
    });
    return value;
  }
  registrarUsuario(email: string, pass: string) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.authService.auth.createUserWithEmailAndPassword(email, pass)
        .then(() => {
          this.router.navigate(['/login']);
        },
          err => reject(err));
    });
  }
  async loginFirebase(email: any, password: any) {
    try {
      await this.authService.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
      });
    } catch (e) {
      alert(e.messagge);
    }
  }
  async logOutFirebase() {
    this.fb.logout().then(
      res => {
        this.logged = false;
        this.storage.remove('user');
        this.router.navigate(['/login']);
      },
      error => {
        alert(error);
      }
    );
  //   try {
  //     await this.authService.auth.signOut();
  //     this.storage.remove('user');
  //     this.router.navigate(['/login']);
  //   } catch (e) {
  //     alert(e.messagge);
  //   }
  }
}
