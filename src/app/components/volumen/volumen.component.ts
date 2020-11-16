import { Component, OnInit, Input } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-volumen',
  templateUrl: './volumen.component.html',
  styleUrls: ['./volumen.component.scss'],
})
export class VolumenComponent implements OnInit {
  @Input('data') data: any = [];
  valor: number;

  constructor(private events:Events) {
    events.subscribe('volumen-vertedero',(data:any)=>{
      this.checkStatus();
     });
  }

  ngOnInit() {
    this.valor = (this.data.value / this.data.tope) * 100;
  }

  checkStatus() {
    this.valor = (this.data.value / this.data.tope) * 100;
  }




}
