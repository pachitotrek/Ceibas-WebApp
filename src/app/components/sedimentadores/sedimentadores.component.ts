import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'sedimentadores',
  templateUrl: './sedimentadores.component.html',
  styleUrls: ['./sedimentadores.component.scss'],
})
export class SedimentadoresComponent implements OnInit {
  data:any=[];
  uno:any=[];
  dos:any=[];
  tres:any=[];
  act: boolean=false;
  active:boolean=false;

  constructor(private ws: WebsocketService) {
   this.receive();
   }

  ngOnInit() {   
  }  

  receive() {
    this.ws.listen('sedi-act').subscribe((resp: any) => { 
      this.data = resp;   
      this.uno = this.data.uno;
      this.dos = this.data.dos;
      this.tres = this.data.tres;   
      this.active=true;
    })
  }


}
