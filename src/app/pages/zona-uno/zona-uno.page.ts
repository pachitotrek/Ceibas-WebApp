import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';


@Component({
  selector: 'app-zona-uno',
  templateUrl: './zona-uno.page.html',
  styleUrls: ['./zona-uno.page.scss'],
})
export class ZonaUnoPage implements OnInit {

  constructor(private api:ApiService,private ws:WebsocketService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.start();    
  }

  ionViewWillLeave() {
    this.ws.silenciar('vert-datos');  
  }

  ionViewDidLeave(): void {
    this.ws.silenciar('vert-datos');
    this.ws.silenciar('sedi-act');
    this.ws.silenciar('flo-act');  
  }

  start() {
    if(this.ws.socketStatus){
      this.api.SendDatos('get', 'flo');
      this.api.SendDatos('get', 'sedi');
      this.api.SendDatos('get', 'vert');
    }   
  }

  

}
