import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-tanquext',
  templateUrl: './tanquext.page.html',
  styleUrls: ['./tanquext.page.scss'],
})
export class TanquextPage implements OnInit {
  data: any=[];
  active: boolean=false;

  constructor(private api:ApiService,private ws:WebsocketService) {
    this.receive();
   }

  ngOnInit() {
    this.emitir();
  }
  ionViewWillEnter() {
    this.emitir();
  }

  receive() {
    this.ws.listen('apoyo-datos').subscribe((resp: any) => { 
      this.data = resp;   
      console.log(this.data);
 
      this.active=true;
    })
  }

  emitir(){   
    let datos={id:"apoyo"};
    this.api.SendDatos(datos,"apoyo");
  }


}
