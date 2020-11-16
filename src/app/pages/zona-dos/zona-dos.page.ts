import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-zona-dos',
  templateUrl: './zona-dos.page.html',
  styleUrls: ['./zona-dos.page.scss'],
})
export class ZonaDosPage implements OnInit {

  constructor(private api:ApiService,private ws:WebsocketService) { }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.start();    
  }

  ionViewDidLeave(): void {
    this.ws.silenciar('int-act');  
  }

  start() {
    this.api.SendDatos('get', 'int');  
  }

}
