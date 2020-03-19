import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.showSplash = false;
      }, 3000);
    //   console.log('impresion del valor obtenido al llamar check', this.auth.checkSession());
    //   this.auth.checkSession().finally(() => {
    //   this.router.navigate(['/home']);
    //   console.log('if true');
    // }).catch(() => {
    //   this.router.navigate(['/login']);
    //   console.log('if false');
    // });

      this.statusBar.styleDefault();
    });
  }
}
