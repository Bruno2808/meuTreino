import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Exercicio } from '../entidade/exercicio';
import { map } from 'rxjs/operators'; /*Única importação à mão*/

@Component({
  selector: 'app-exercicio-lista',
  templateUrl: './exercicio-lista.page.html',
  styleUrls: ['./exercicio-lista.page.scss'],
})
export class ExercicioListaPage implements OnInit {

  listaExercicio: Observable<Exercicio[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaExercicio = this.fire.list<Exercicio>('exercicio').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  ngOnInit() {
  }

}
