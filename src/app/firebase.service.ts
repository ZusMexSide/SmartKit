import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: any;
  uid: any;
  constructor(private houseIoT: AngularFireDatabase) {
    this.user = localStorage.getItem('user');
    this.uid = JSON.parse(this.user).uid;
  }
  getTemp(): Observable<any> {
    return this.houseIoT.object('iot/1/servicios/0/valor').valueChanges();
  }
  getHumedad(): Observable<any> {
    return this.houseIoT.object('iot/1/servicios/4/valor').valueChanges();
  }
  getAire(): any {
    return this.houseIoT.object('iot/1/servicios/1/valor').valueChanges();
  }
  // listas
  getTemperatureHumidity() {
    return this.houseIoT.list(`iot2/users/${this.uid}/servicios/temp-hum`).valueChanges();
  }
  getAirQuality() {
    return this.houseIoT.list(`iot2/users/${this.uid}/servicios/calidadAire`).valueChanges();
  }
  getMovement() {
    return this.houseIoT.list(`iot2/users/${this.uid}/servicios/movimiento`).valueChanges();
  }
  getSeismograph() {
    return this.houseIoT.list(`iot2/users/${this.uid}/servicios/sismos`).valueChanges();
  }
  //servicios
  getObjectAirQuality(id:any) {
    return this.houseIoT.object(`iot2/servicios/${id}/valor`).valueChanges();
  }

  //cambios 
  updateStatus(id:any,valor:any,servicio:any){
    return this.houseIoT.object(`iot2/users/${this.uid}/servicios/${servicio}/${id}`).update({valor:valor});

  }
  updateStatusService(id:any,valor:any){
    return this.houseIoT.object(`iot2/servicios/${id}`).update({valor:valor});
   }

  //insertar a los servicios de calidad de aire y temperatura y humedad
  insertServiceNumericos(service:any,id:any,room:any){
   return this.houseIoT.object(`iot2/users/${this.uid}/servicios/${service}/${id}`).update({room:room,id:id});
  }
  //insertar a los servicios de movimiento y de sismos
  insertServiciosBooleanos(service:any,id:any,room:any){
    return this.houseIoT.object(`iot2/users/${this.uid}/servicios/${service}/${id}`).update({room:room,id:id,valor:false});
  }
  //consulta servicios
  getTemperature(id:any){
    return this.houseIoT.object(`iot2/servicios/${id}/temperature`).valueChanges();
  }
  getHumidity(id:any){
    return this.houseIoT.object(`iot2/servicios/${id}/humidity`).valueChanges();
  }
}
