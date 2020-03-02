import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
})
export class MovimientoPage implements OnInit {
  movimiento: boolean;
  constructor() { 
    this.movimiento=true;
  }

  ngOnInit() {
  }

}
