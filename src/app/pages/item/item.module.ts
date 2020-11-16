import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemPage } from './item.page';
import { ComponentesModule } from 'src/app/components/componentes.module';
import { PopmenuComponent } from 'src/app/components/popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: ItemPage
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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemPage]
})
export class ItemPageModule {}
