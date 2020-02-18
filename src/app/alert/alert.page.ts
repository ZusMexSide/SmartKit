import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public toastController: ToastController) {
  }

  async openToast() {
    const toast = await this.toastController.create({
     message: 'Desactivada',
     duration: 2000,
     color: 'dark',
     showCloseButton: true,
     closeButtonText: 'Close',
    });
    toast.present();
  }

 ngOnInit() {
 }

}
