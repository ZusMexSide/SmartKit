import { Component, ViewChild, Input } from '@angular/core';
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
  @Input() servicio: string;
  @ViewChild('chartTemp', { static: false }) chartTemp;
  bars: any;
  colorArray: any;
  subscripcion: Subscription;
  temp: any = 23;
  hum: any = 34;
  clima: any;
  data: any;
  id: any;
  myDate: string = new Date().toISOString();
  constructor(private ioTService: FirebaseService, private modalController: ModalController) {
    this.ioTService.getServices().
        subscribe((res) => {
            console.log(res);
            this.data = res;
        });
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

  cargarDatos(servicio: any){
    this.ioTService.getTemperature(servicio).
    subscribe((res) => {
      console.log(res);
      this.temp = res;
    });
    this.ioTService.getHumidity(servicio).
    subscribe((res) => {
      console.log(res);
      this.hum = res;
    })
  }

}

