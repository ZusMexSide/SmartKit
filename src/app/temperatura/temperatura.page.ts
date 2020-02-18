import { Component, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
})
export class TemperaturaPage{
  @ViewChild('chartTemp',{static:false})chartTemp;
  bars:any;
  colorArray:any;

  constructor() { 

  }

  ionViewDidEnter(){
    this.createChartTemp();
  }

  createChartTemp(){
    this.bars=new  Chart(this.chartTemp.nativeElement,{
      type: 'line',
      data: {
          labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
          datasets: [{
              label: 'Por Hora',
              data: [12, 19, 26, 30.5, 22, 17],
              backgroundColor: [
                  'rgba(30, 144, 255, 0.2)',
                  'rgba(30, 144, 255)',
                  'rgba(30, 144, 255)',
                  'rgba(30, 144, 255)',
                  'rgba(30, 144, 255)',
                  'rgba(30, 144, 255)'
              ],
              borderColor: [
                'rgba(30, 144, 255)',
                'rgba(30, 144, 255)',
                'rgba(30, 144, 255)',
                'rgba(30, 144, 255)',
                'rgba(30, 144, 255)',
                'rgba(30, 144, 255)'
              ],
              borderWidth: 1,
              pointHoverBackgroundColor: 'rgba(30, 144, 255)',
              pointBackgroundColor: 'rgba(30, 144, 255)',
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });
  }

  

}

