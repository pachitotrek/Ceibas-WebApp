import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'filtros-interiores',
  templateUrl: './filtros-interiores.component.html',
  styleUrls: ['./filtros-interiores.component.scss'],
})
export class FiltrosInterioresComponent implements OnInit {
  uno: any = [];
  dos: any = [];
  tres: any = [];
  cuatro: any = [];
  cinco: any = [];
  seis: any = [];
  active: boolean = false;
  data: any = [];

  valores:any=[
    {titulo:"Filtro # 1",id:"1"},
    {titulo:"Filtro # 2",id:"2"},
    {titulo:"Filtro # 3",id:"3"},
    {titulo:"Filtro # 4",id:"4"},
    {titulo:"Filtro # 5",id:"5"},
    {titulo:"Filtro # 6",id:"6"}    
  ];

  constructor(private ws: WebsocketService,private api:ApiService,private router:Router) {
    this.receive();
  }

  ngOnInit() {
  }



  receive() {
    this.ws.listen('int-act').subscribe((resp: any) => {
      this.data = resp;   
      console.log(this.data);
      this.uno = this.data.uno;
      this.dos = this.data.dos;
      this.tres = this.data.tres;
      this.cuatro = this.data.cuatro;
      this.cinco = this.data.cinco;
      this.seis = this.data.seis;
      this.active = true;
    })
  }

  emitir(event){   
    let datos={id:"interior",value:event.target.value};
    this.api.SendDatos(datos,"interior");
  }

  nav(item){
    this.router.navigate(['/filtro',item]);
  }


}
