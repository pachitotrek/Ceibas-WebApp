import { Component, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { AnimationService } from 'src/app/services/animation.service';
import { Events, LoadingController } from '@ionic/angular';

@Component({
  selector: 'vertedero',
  templateUrl: './vertedero.component.html',
  styleUrls: ['./vertedero.component.scss'],
})
export class VertederoComponent implements OnInit {
  @Output()update : EventEmitter<any>= new EventEmitter();
  data: any = [];
  caudal: any = [];
  nivel: any = [];
  temperatura: any = [];
  conductividad: any = [];
  ph: any = [];
  turbiedad: any = [];
  turbiedad2: any = [];
  active:boolean=false;
  actuador:any=[];

  constructor(private ws: WebsocketService,private api:ApiService,private events:Events,private loader:LoadingController) {
    this.receive();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  
  }

  receive() {
    this.ws.listen('vert-datos').subscribe((resp: any) => {
      this.data = resp[0];      
      this.actuador=this.data.actuador;     
      this.caudal = this.data.caudal;
      this.nivel = this.data.nivel;
      this.temperatura = this.data.temperatura;
      this.conductividad = this.data.conductividad;
      this.ph = this.data.ph;
      this.turbiedad = this.data.turbiedad;
      // this.turbiedad2 = this.data.turbiedad_baja;
      this.active=true;    
      this.events.publish('volumen-vertedero');
    })
  }



  



}
