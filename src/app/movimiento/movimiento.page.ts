import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
})
export class MovimientoPage implements OnInit {
  movimiento: boolean;
  movimientos: any;
  data: any;
  servicio: any;
  constructor(public toastController: ToastController, private iotFirebase: FirebaseService) {
    // primero obtengo el que servicio tengo
    this.iotFirebase.getServices().
      subscribe((res) => {
        // lo guardo en la variable servicio
        this.servicio = res;
        // consulto el valor del servicio del movimiento
        this.iotFirebase.getMovement(res).
          subscribe((value) => {
            // y lo meto en una varible para usarlo en html
            this.data = value;
          });
      });
  }

  ngOnInit() {
  }
 // metodo que se realiza para cambiar el estado del toggle
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
    this.iotFirebase.updateMovimiento(con, this.servicio).then((res) => {
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
