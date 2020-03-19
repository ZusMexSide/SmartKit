import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private houseIoT: AngularFireDatabase,
              private auth: AuthService) {}

  // regresa los datos del usuario
  getUsers(uid: any) {
    return this.houseIoT.object(`smartKit/usuarios/${this.auth.user.uid}`).valueChanges();
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
    this.houseIoT.object(`smartKit/usuarios/${this.auth.user.uid}`).update({ id: this.auth.user.uid, correo: this.auth.user.email, servicio });
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
    return this.houseIoT.object(`smartKit/usuarios/${this.auth.user.uid}/servicio`).valueChanges();
  }





}
