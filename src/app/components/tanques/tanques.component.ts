import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ModalController } from '@ionic/angular';
import {Graphic2Component} from '../graphic2/graphic2.component'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'tanques',
  templateUrl: './tanques.component.html',
  styleUrls: ['./tanques.component.scss'],
})
export class TanquesComponent implements OnInit { 
  data:any=[];
  active: boolean=false;
  uno:any=[];
  dos:any=[];
  tres:any=[];
  cuatro:any=[];
  cinco:any=[];

  constructor(private ws:WebsocketService,public modalController: ModalController,private api:ApiService) {
    this.receive();
   }

  ngOnInit() {}

  receive() {
    this.ws.listen('tanques-datos').subscribe((resp: any) => {
      this.data = resp;    
      this.uno=this.data.uno;    
      this.dos=this.data.dos;
      this.tres=this.data.tres;
      this.cuatro=this.data.cuatro;
      this.cinco=this.data.cinco; 

      this.active=true;
    })
  }

  nav(item){
    let datos={id:"tanques",value:item};
    this.api.SendDatos(datos,'tanquesunit');
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: Graphic2Component,
      mode:'ios',
      cssClass:'grafica-modal'
    });
    return await modal.present();
  }



}
