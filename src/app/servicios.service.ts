import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }
  obtenerDatos(){
    console.log("El servicio esta funcionando");
  }
}
