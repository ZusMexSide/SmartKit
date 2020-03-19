import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  sismos: any;
  movimientos: any;
  sismo: boolean;
  servicio: any;
  data: any;
  constructor(public toastController: ToastController,private iotFirebase: FirebaseService) {
    this.iotFirebase.getServices().
      subscribe((res) => {
        this.servicio = res;
        this.iotFirebase.getSeismograph(res).
          subscribe((value) => {
            this.data = value;
          });
      });
  }

  ngOnInit() {
  }

  async openToast(e: any) {
    let mens: any;
    let con: any;
    const value = e.detail.checked;
    if (value === true) {
      mens = 'Activado';
      con = true;
    } else if (value === false) {
      mens = 'Desactivado';
      con = false;
    }
    this.iotFirebase.updateSismo(con, this.servicio).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    const toast = await this.toastController.create({
      message: mens,
      duration: 2000,
      color: 'dark',
      showCloseButton: true,
      closeButtonText: 'Close',
    });
    toast.present();
  }
}
