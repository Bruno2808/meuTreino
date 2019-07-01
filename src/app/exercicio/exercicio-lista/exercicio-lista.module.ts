import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExercicioListaPage } from './exercicio-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExercicioListaPage]
})
export class ExercicioListaPageModule {}
