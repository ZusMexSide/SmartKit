import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: any;
  user: any;
  uid: any;
  constructor(private iotFirebase: FirebaseService, private modalController: ModalController,
              private auth: AuthService) {
  }
  ionViewDidEnter() {
    this.user = this.auth.user;
    this.username = this.user.email;
    this.uid = this.user.uid;
    this.verificar();
  }
  // se verifica si el usuario tiene un servicio
  async verificar() {
    await this.iotFirebase.getUsers(this.uid).subscribe((res) => {
      if (res === null) {
        // si la respuesta es null mandara una respues de false de que no esta registrado ala base de datos y se abrira el modal
        // para que no entre ala pagina de inicio(HOME)
        console.log(false);
        this.presentModal();
      } else {
        // si existe entonces no se realiza una accion
        console.log(true);
      }
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }
}
