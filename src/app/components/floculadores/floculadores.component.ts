import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Events, NavController } from '@ionic/angular';
import { WebsocketService } from 'src/app/services/websocket.service';



@Component({
  selector: 'floculadores',
  templateUrl: './floculadores.component.html',
  styleUrls: ['./floculadores.component.scss'],
})
export class FloculadoresComponent implements OnInit {
  data: any = [];
  uno: any = [];
  dos: any = [];
  tres: any = [];
  cuatro: any = [];
  act: boolean = true;
  active:boolean=false;

  constructor(private ws: WebsocketService) {
    this.receive();
  }

  ngOnInit() {
  
  }
  NgAfterViewInit() {
   
  }

  receive() {
    this.ws.listen('flo-act').subscribe((resp: any) => {   
      this.data = resp;
      this.uno = this.data.uno;
      this.dos = this.data.dos;
      this.tres = this.data.tres;
      this.cuatro = this.data.cuatro;
      this.active=true;
    })
  }



}
