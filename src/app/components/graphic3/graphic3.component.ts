import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-graphic3',
  templateUrl: './graphic3.component.html',
  styleUrls: ['./graphic3.component.scss'],
})
export class Graphic3Component implements OnInit {
  chart: Chart;
  @Input('data') data:any=[];
  @Input('titulo') titulo:any="";
  labels:any=[];
  datos:any=[];
  legend:any;
  name: string;
  active: boolean=false;

   constructor() {
   }

  ngOnInit() {
    this.setData();
  }
  setData(){  

    this.data.lineChartData.forEach(e => { 
      let {a,m,d,h,mm,ss} = e.fecha;
      let mes = m-1;
      let newss= ss.split("+");
      let seconds= newss[0];     
      this.datos.push(
       [Date.UTC(a,mes,d,h,mm,seconds),e.y]
      )   
   });

   this.init();

   this.chart.addSeries(
     {type:"spline",name:this.name || this.titulo,data:this.datos},
     true,
     true         
    )  
   this.active=true;  
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
