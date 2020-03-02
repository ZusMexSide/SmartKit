import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
username:any;
user:any;
  constructor() {
    this.user = localStorage.getItem('user');
    this.username = JSON.parse(this.user).displayName;
  }

}
