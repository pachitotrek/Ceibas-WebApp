import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus=false;
  public token:any="";

  constructor(public socket: Socket,private local:LocalStorageService) {
    this.cargarToken();
    this.checkStatus();
   }


  checkStatus(){    
    this.socket.on('connect',()=>{  
      let date = new Date();
      console.log(date);   
      console.log("Conectado al servidor");
      this.socketStatus=true;
    }); 
    
    this.socket.on('disconnect',()=>{
      let date = new Date();
      console.log(date);   
      console.log("DesConectado al servidor");
      this.socketStatus=false;
    });
  }

  emit( evento: string, payload?: any, callback?: Function ) {
    // emit('EVENTO', payload, callback?)
    this.socket.emit( evento, payload, callback );
  }

  listen( evento: string ) {
    return this.socket.fromEvent( evento );
  }

  silenciar( evento: string ) {
    return this.socket.removeListener(evento);
  }

  loginWS( token: string ) {
    return new Promise(  (resolve, reject) => {
      this.emit( 'configurar-usuario', { token }, resp => {     
        resolve();
      });
    });
  }
  

  cargarToken(){
    this.local.cargarStorage('token').then((token:any)=>{
        this.token=token;
        this.loginWS(this.token);
    });    
  }





}
