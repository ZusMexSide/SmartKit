import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {
  @Input() servicio;
  sku: any;
  room: any;
  serv: any;
  constructor(private modalCtrl: ModalController, private iotFirebase: FirebaseService) {
    this.datos();
  }

  ngOnInit() { }
  async datos(){
    await this.serv === this.servicio
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  service() {
    console.log(this.servicio, this.sku, this.room);
    if (this.servicio === "calidadAire" || this.servicio === "temp-hum") {
      this.iotFirebase.insertServiceNumericos(this.servicio, this.sku, this.room);
    } else {
      this.iotFirebase.insertServiciosBooleanos(this.servicio, this.sku, this.room);
    }
    this.dismiss();
  }

}
