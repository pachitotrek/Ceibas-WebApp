import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { ZonaUnoPage } from './zona-uno.page';
import { ComponentesModule } from 'src/app/components/componentes.module';
import { PopmenuComponent } from 'src/app/components/popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: ZonaUnoPage
  }
];

@NgModule({
  entryComponents:[
    PopmenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    IonicModule,
    ComponentesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZonaUnoPage]
})
export class ZonaUnoPageModule {}
