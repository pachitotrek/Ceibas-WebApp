import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { PopmenuComponent } from './popmenu/popmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertyComponent } from './property/property.component';
import { VertederoComponent } from './vertedero/vertedero.component';
import { FloculadoresComponent } from './floculadores/floculadores.component';
import { SedimentadoresComponent } from './sedimentadores/sedimentadores.component';
import { ActuadorComponent } from './actuador/actuador.component';
import { FextComponent } from './fext/fext.component';
import { FiltrosInterioresComponent } from './filtros-interiores/filtros-interiores.component';
import { TanquesComponent } from './tanques/tanques.component';


import { VolumenComponent } from './volumen/volumen.component';

import { GraphicComponent } from './graphic/graphic.component';
import { Graphic2Component } from './graphic2/graphic2.component';
import { Graphic3Component } from './graphic3/graphic3.component';
import { LoadingComponent } from './loading/loading.component';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [MenuComponent,FooterComponent,PopmenuComponent,PropertyComponent,VertederoComponent,FloculadoresComponent,
    SedimentadoresComponent,ActuadorComponent,FextComponent,FiltrosInterioresComponent,TanquesComponent,VolumenComponent,GraphicComponent,Graphic2Component,Graphic3Component,
LoadingComponent],
  imports: [
    CommonModule,    
    ChartModule,
    FormsModule,    
    ReactiveFormsModule,
    IonicModule
  ],
  exports:[
    MenuComponent,FooterComponent,PopmenuComponent,PropertyComponent,
    VertederoComponent,FloculadoresComponent,SedimentadoresComponent,ActuadorComponent,FextComponent,
    FiltrosInterioresComponent,
    TanquesComponent,VolumenComponent,GraphicComponent,Graphic2Component,
    Graphic3Component,LoadingComponent  ]

})
export class ComponentesModule { }
