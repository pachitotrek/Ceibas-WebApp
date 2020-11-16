import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-zona-tres',
  templateUrl: './zona-tres.page.html',
  styleUrls: ['./zona-tres.page.scss'],
})
export class ZonaTresPage implements OnInit {

  constructor(private api:ApiService,private ws:WebsocketService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.start();    
  }
  ionViewDidLeave(): void {
    this.ws.silenciar('tanques-datos');  
  }

  start() {
    this.api.SendDatos('get', 'tanques'); 
  }

}
