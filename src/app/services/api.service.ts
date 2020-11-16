import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Global } from './global';
import { WebsocketService } from './websocket.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string;

  constructor(private http: HttpClient,private ws:WebsocketService) {
    this.url = Global.url;
  }

  //Vertedero
  
  GetVertedero(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url + 'vertedero', { headers: headers });
  }
  //sedimentador
  GetSedimentador(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url + 'sedi', { headers: headers });
  }
  //floculadores
  GetFloculadores(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url + 'flo', { headers: headers });
  }
  //filtros
  GetFiltrosExt(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url + 'fexteriores', { headers: headers });
  }
    //filtros
  GetFiltrosInt(): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get(this.url + 'finteriores', { headers: headers });
  }
  GetTanques(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url + 'tanques', { headers: headers });
  }

  SendDatos(query:any,event:any){
    const payload = {
      de: 'Javier',
      cuerpo: query
    };

    this.ws.emit(event,payload);
  }

 


  





}
