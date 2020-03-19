import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: any;
  service: any;
  uid: any;
  email: any;
  constructor(private houseIoT: AngularFireDatabase) {
    // obtiene los datos del usuario entrando al storage
    this.user = localStorage.getItem('user');
    this.uid = JSON.parse(this.user).uid;
    this.email = JSON.parse(this.user).email;
  }

  // musestra la lista de los servicios
  listData() {
    return this.houseIoT.list(`smartKit/servicios/${this.service}`).valueChanges();
  }
  // regresa los datos del usuario
  getUsers(uid: any) {
    return this.houseIoT.object(`smartKit/usuarios/${uid}`).valueChanges();
  }
  // consulta la lista de los servicios
  getListService(servicio: any) {
    return this.houseIoT.object(`smartKit/servicios/${servicio}`).valueChanges();
  }
  // cambia de valor del servicio de movimiento
  updateMovimiento(valor: any, servicio: any) {
    return this.houseIoT.object(`smartKit/servicios/${servicio}/movimiento`).update({valor });
  }
  // cambia de valor del servicio de sismo
  updateSismo(valor: any, servicio: any) {
    return this.houseIoT.object(`smartKit/servicios/${servicio}/sismo`).update({ valor });
  }
  // inserta nuevo cliente con la clave del kit vendido
  insertKit( servicio: any) {
    this.houseIoT.object(`smartKit/usuarios/${this.uid}`).update({ id: this.uid, correo: this.email, servicio });
  }
  // obtiene la temperatura del servicio buscado
  getTemperature(servicio: any) {
    return this.houseIoT.object(`smartKit/servicios/${servicio}/temp-hum/temperatura`).valueChanges();
  }
   // obtiene la humedad del servicio buscado
  getHumidity(servicio: any) {
    return this.houseIoT.object(`smartKit/servicios/${servicio}/temp-hum/humedad`).valueChanges();
  }
   // obtiene la calidad de aire del servicio buscado
  getAirQuality(servicio: any) {
    return this.houseIoT.list(`smartKit/servicios/${servicio}/calidad`).valueChanges();
  }
  // obtiene el valor si es true o false
  getMovement(servicio: any) {
    return this.houseIoT.list(`smartKit/servicios/${servicio}/movimiento`).valueChanges();
  }
  getSeismograph(servicio: any) {
    return this.houseIoT.list(`smartKit/servicios/${servicio}/sismos`).valueChanges();
  }
  // obtiene el servicio que tiene el usuario para realizar match
  getServices() {
    return this.houseIoT.object(`smartKit/usuarios/${this.uid}/servicio`).valueChanges();
  }





}
