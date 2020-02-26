import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
})
export class TemperaturaPage {
  @ViewChild('chartTemp', { static: false }) chartTemp;
  bars: any;
  colorArray: any;
  subscripcion: Subscription;
  temp: any=23;
  hum:any=34;
  clima:any;
  data:any;
  id:any;
  myDate: String = new Date().toISOString();
  constructor(private ioTService: FirebaseService,private modalController: ModalController) {
    this.ioTService.getTemperatureHumidity().subscribe((res)=>{
      console.log(res);
      this.data=res;
    })

  }

   ionViewDidEnter() {
    // this.createChartTemp();
  }
  // createChartTemp() {
  //   this.bars = new Chart(this.chartTemp.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
  //       datasets: [{
  //         label: 'Por Hora',
  //         data: [12, 19, 26, 30.5, 22, 17],
  //         backgroundColor: [
  //           'rgba(30, 144, 255, 0.2)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)'
  //         ],
  //         borderColor: [
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)',
  //           'rgba(30, 144, 255)'
  //         ],
  //         borderWidth: 1,
  //         pointHoverBackgroundColor: 'rgba(30, 144, 255)',
  //         pointBackgroundColor: 'rgba(30, 144, 255)',
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

  cargarDatos(id:any){
    this.ioTService.getTemperature(id).subscribe((res)=>{
      console.log(res);
      this.temp=res;
    })
    this.ioTService.getHumidity(id).subscribe((res)=>{
      console.log(res);
      this.hum=res;
    })
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      componentProps:{
          servicio: "temp-hum"
      }
    });
    return await modal.present();
  }

}

