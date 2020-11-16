import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZonaDosPage } from './zona-dos.page';
import { ComponentesModule } from 'src/app/components/componentes.module';
import { PopmenuComponent } from 'src/app/components/popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: ZonaDosPage
  }
];

@NgModule({
  entryComponents:[
    PopmenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZonaDosPage]
})
export class ZonaDosPageModule {}
