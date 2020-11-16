import { Component, OnInit, Input } from '@angular/core';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  @Input('data') data: any = [];
  @Input('titulo') titulo: string = "";
  @Input('numero')numero:Number=null;
  @Input('pro') pro:string=""; 

  escala:any;
  cero:any;
  tope:any;
  valor:any;
  ancho:any;

  pos: string = "";
  status: string = "";
  state:number=null;
  actual:string="0";
  alarma:any="0";

  constructor(private events:Events) {
   events.subscribe('volumen-vertedero',(data:any)=>{
    this.checkStatus();
   });
   
  }

  ngOnInit() { 
    this.valor=this.data.value || 0;
    this.alarma=this.data.alarma;  
    this.tope=this.data.tope || 100; 
    this.cero=this.data.cero || 0;
    this.actual= this.data.value || 0;
    this.ancho= (this.valor/this.tope)*100;
  }

  checkStatus(){ 
    this.valor=this.data.value || 0;
    this.tope=this.data.tope || 100; 
    this.cero=this.data.cero || 0;
    this.actual= this.data.value || 0;
    this.ancho= (this.valor/this.tope)*100;
  }
  








}
