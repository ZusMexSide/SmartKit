import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FirebaseService } from '../firebase.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  data: any;
  user: any;
  username: any;
  email: any;
  photo: any;
  constructor(private router: Router, protected authService: AuthService,
    private iotFirebase: FirebaseService,
    private storage: NativeStorage) {
    this.storage.getItem('user').then((res) => {
      console.log(res);
<<<<<<< HEAD
=======
      
>>>>>>> 6c1846a67684f6a44569d611e6a8528139aeefbf
      this.username = res.displayName;
      this.email = res.email;
      this.photo = res.picture;
    });

  }

  ngOnInit() {
  }
}
