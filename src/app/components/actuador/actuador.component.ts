import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'actuador',
  templateUrl: './actuador.component.html',
  styleUrls: ['./actuador.component.scss'],
})
export class ActuadorComponent implements OnInit {
  @Input('data') data:any=[];
  @Input('numero') numero:string="";
  state: any="";
  status: string="";
  pos: any="";
  operativo:any="";
  tipo:any="";

  constructor() { }

  ngOnInit() {
    this.check();
    this.time();
  }
  check() {

    this.time();    
      this.state = this.data.status; 
      this.tipo=this.data.tipo;    
     
      switch (this.state) {
        case 7:
          this.status = "Fuera de Linea";
          this.pos = this.data.posicion;
          this.operativo="Fuera de Linea";
          break;

        case 10:
          this.status = "Cerrado";
          this.pos = this.data.posicion;
          this.operativo="Operativo";
          break;

        case 12:
          this.status = "Abierto";
          this.pos = this.data.posicion;
          this.operativo="Operativo";
          break;

        case 15:
          this.status = "Cerrando";
          this.pos = this.data.posicion;
          this.operativo="Operativo";
          break;

        case 17:
          this.status = "Abriendo";
          this.pos = this.data.posicion;
          this.operativo="Operativo";
          break;

        default:
            this.status = "Falla";
            this.pos = "0";
            this.operativo="Fuera de Linea";
          break;
      }
      
   
  }

  time(){  
    setInterval(() => {
        this.check();
    }, 31000)
    
  }


}
