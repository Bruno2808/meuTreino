import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'exercicio-salvar', loadChildren: './exercicio/exercicio-salvar/exercicio-salvar.module#ExercicioSalvarPageModule' },
  { path: 'exercicio-lista', loadChildren: './exercicio/exercicio-lista/exercicio-lista.module#ExercicioListaPageModule' },
  { path: 'exercicio-lista', loadChildren: './exercicio/exercicio-lista/exercicio-lista.module#ExercicioListaPageModule' },
  { path: 'exercicio-salvar', loadChildren: './exercicio/exercicio-salvar/exercicio-salvar.module#ExercicioSalvarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
