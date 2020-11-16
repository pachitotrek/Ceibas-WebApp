import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-graphic2',
  templateUrl: './graphic2.component.html',
  styleUrls: ['./graphic2.component.scss'],
})
export class Graphic2Component implements OnInit {
  data:any=[];
  labels:any=[];
  legend:any;
  numero:any="";
  active:boolean=false;
 
  constructor(private ws:WebsocketService,public modalController: ModalController) {
    this.receive();
   }

  ngOnInit() {}


  receive(){
    this.ws.listen('sendtanque').subscribe((d:any)=>{    
      this.data=d;
      this.numero=d.numero;
      this.active=true;  
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
