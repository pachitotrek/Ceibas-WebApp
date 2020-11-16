import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription, timer, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent implements OnInit {
  chart: Chart;
  data: any = [];
  dataset:any=[];
  datos:any=[];
  labels: any = [];
  legend: any;
  name: string = "";
  valores: any = [
    { titulo: "Caudal", id: "caudal" },
    { titulo: "Temperatura", id: "temperatura" },
    { titulo: "pH", id: "ph" },
    { titulo: "Turbiedad", id: "turbiedad-alta" },
    { titulo: "Conductividad", id: "conductividad" },
    { titulo: "Nivel", id: "nivel" },
  ];
  active:boolean=false;

  private emicion: Subscription = new Subscription();
  obs$: Observable<any> = timer(3000);

  constructor(private ws: WebsocketService, private api: ApiService) {
    this.receive();
  }

  ngOnInit() {
    this.init();
  }


  receive() {
    this.ws.listen('vertedero').subscribe((d: any) => {
      this.chart.destroy();
      this.datos=[];
     
      this.data = d.lineChartData;
      if (this.name != d.name) {
        this.emicion.unsubscribe();
        this.name = d.name;
      }      
      
      this.data.forEach(e => { 
         let {a,m,d,h,mm,ss} = e.fecha;
         let mes = m-1;
         let newss= ss.split("+");
         let seconds= newss[0];     
  
         this.datos.push(
          [Date.UTC(a,mes,d,h,mm,seconds),e.y]
         );              
       
      });  

      
      this.init();
      
      this.chart.addSeries(
        {type:"spline",name:this.name,data:this.datos},
        true,
        true         
       )  

      this.active=true;   
      this.calling();
    });
  }

  calling() {
    let query = { id: "vertedero", value: this.name, numero: 1 };
    let Observer: any = {
      next: (data: any) => {
        this.api.SendDatos(query, 'graphic-vertedero');
      },
      error: (error: any) => console.log(error),
      complete: () => console.log("complete")
    }
    this.emicion.add(this.obs$.subscribe(Observer));
  }

  async emitir(event) {
    let datos = { id: "vertedero", value: event.target.value, numero: 1 };
    this.api.SendDatos(datos, "graphic-vertedero");
  }

  ngOnDestroy(): void {
    this.emicion.unsubscribe();
  }
  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: this.name
      },
      plotOptions: {
        series: {
          marker: {
            enabled: true
          }
        }
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%e. %b',
        },
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'Valores'
        },
        min: 0
      },
      credits: {
        enabled: false
      }
    });

    this.chart = chart;


    // chart.ref$.subscribe(console.log);
  }


}
