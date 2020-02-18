import { Component, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-aire',
  templateUrl: './aire.page.html',
  styleUrls: ['./aire.page.scss'],
})
export class AirePage {
  @ViewChild('chartTemp',{static:false})chartTemp;
  bars:any;
  colorArray:any;

  constructor() { }

  ngOnInit() {
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
            data: [65, 20, 40, 15, 77, 90],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
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
