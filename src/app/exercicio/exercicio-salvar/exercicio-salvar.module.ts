import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExercicioSalvarPage } from './exercicio-salvar.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioSalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExercicioSalvarPage]
})
export class ExercicioSalvarPageModule {}
