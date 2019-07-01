import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../entidade/exercicio';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio-salvar',
  templateUrl: './exercicio-salvar.page.html',
  styleUrls: ['./exercicio-salvar.page.scss'],
})
export class ExercicioSalvarPage implements OnInit {

  exercicio: Exercicio = new Exercicio();

  constructor(private fire: AngularFireDatabase,
    private rota: Router
  ) { }

  ngOnInit() {
  }
  salvar() {
    this.fire.list('exercicio').push(this.exercicio);
    this.exercicio = new Exercicio();
    this.rota.navigate(['exercicio-lista'])
    alert('Salvo com sucesso!')

  }
}
