import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrincipalService } from '../../services/principal.service';
import { Jogador } from '../../interfaces/jogador.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss',
})
export class CriarComponent {
  // output event emmiter
  @Output() jogadorCriado: EventEmitter<undefined> = new EventEmitter<undefined>();


  constructor(private service: PrincipalService) {}

  criarJogador(form: NgForm) {

    this.service.criar(form.value).subscribe(() => {
      console.log('Jogador criado com sucesso!');
      this.jogadorCriado.emit(form.value); // Emit the created player
    });
  }
}
