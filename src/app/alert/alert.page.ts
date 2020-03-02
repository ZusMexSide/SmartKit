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
  sismos:any;
  movimientos:any;
  sismo: boolean;
  constructor(public toastController: ToastController, private modalController :  ModalController , private iotFirebase:FirebaseService) {
    this.iotFirebase.getSeismograph().subscribe((res)=>{
      this.sismos=res;
    })
    this.iotFirebase.getMovement().subscribe((res)=>{
      this.movimientos=res;
    })
    this.sismo=false
  }

  updateStatus(e:any,id:any,servicio:any){
    var mens:any;
    var con:any;
    console.log(e);
    var value = e.target.checked;
    if (value === true) {
      con=true;
    } else if (value === false) {
      con=false;
    }
    this.iotFirebase.updateStatus(id,con,servicio).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }
  async openToast(e:any,id:any,servicio:any) {
    var mens:any;
    var con:any;
    console.log(servicio);
    var value = e.detail.checked;
    if (value === true) {
      mens = "Activado";
      con=true;
    } else if (value === false) {
      mens = "Desactivado";
      con=false;
    }
    this.iotFirebase.updateStatus(id,con,servicio).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
    this.iotFirebase.updateStatusService(id,con).then((res)=>{
      console.log(res);
    }).catch((err)=>{
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

  ngOnInit() {
  }
  async presentModal(service) {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      componentProps:{
          servicio: service
      }
    });
    return await modal.present();
  }
}