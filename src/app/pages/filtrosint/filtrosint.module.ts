import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FiltrosintPage } from './filtrosint.page';
import { ComponentesModule } from 'src/app/components/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: FiltrosintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FiltrosintPage]
})
export class FiltrosintPageModule {}
