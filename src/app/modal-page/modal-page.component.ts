import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {
  servicio: any;
  constructor(private modalCtrl: ModalController, private iotFirebase: FirebaseService) {
    // obtengo el servicio que tiene la cuenta actual
    this.iotFirebase.getServices().
        subscribe((res) => {
            console.log(res);
            this.servicio = res;
        });
  }

  ngOnInit() { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  service(){
    // consultamos la lista de los servicios
    this.iotFirebase.getListService(this.servicio).
    subscribe((res) => {
      console.log(res);
      // creamos una condicion para ver si el servicio que se ingreso exite o no
      if (res === null) {
        // si es null entonces mandara una alerta que diga que no exite la clave
        alert('No existe esa clave');
      } else if (res != null) {
        console.log('si existe');
        // si exite la clave que se ingreso entonces se inserta ala base de datos y se cierra el modal
        this.iotFirebase.insertKit(this.servicio);
        this.dismiss();
      }
    });

  }
}
