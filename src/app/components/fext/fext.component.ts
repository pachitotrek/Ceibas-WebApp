import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'fext',
  templateUrl: './fext.component.html',
  styleUrls: ['./fext.component.scss'],
})
export class FextComponent implements OnInit {
  data:any=[];
  uno:any=[];
  dos:any=[];
  tres:any=[];
  cuatro:any=[];
  cinco:any=[];
  active:boolean=false;
   

  constructor(private ws:WebsocketService) {
    this.receive();
   }

  ngOnInit() {
   
  }

 
  receive() {
    this.ws.listen('ext-act').subscribe((resp: any) => {
      this.data = resp[0];   
      this.uno=this.data.numero_uno;        
      this.dos=this.data.numero_dos;
      this.tres=this.data.numero_tres;
      this.cuatro=this.data.numero_cuatro;
      this.cinco=this.data.numero_cinco;
      this.active=true;  
    })
  }

}
