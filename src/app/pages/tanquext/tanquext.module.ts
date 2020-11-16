import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TanquextPage } from './tanquext.page';
import { PopmenuComponent } from 'src/app/components/popmenu/popmenu.component';
import { ComponentesModule } from 'src/app/components/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: TanquextPage
  }
];

@NgModule({
  entryComponents:[
    PopmenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentesModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TanquextPage]
})
export class TanquextPageModule {}
