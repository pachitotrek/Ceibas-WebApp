import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZonaTresPage } from './zona-tres.page';
import { ComponentesModule } from 'src/app/components/componentes.module';
import { Graphic2Component } from 'src/app/components/graphic2/graphic2.component';

const routes: Routes = [
  {
    path: '',
    component: ZonaTresPage
  }
];

@NgModule({
  entryComponents:[
    Graphic2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZonaTresPage]
})
export class ZonaTresPageModule {}
