import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrincipalService } from '../../services/principal.service';
import { Jogador } from '../../interfaces/jogador.interface';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss',
})
export class CriarComponent implements OnInit{
  // output event emmiter
  @Output() jogadorCriado: EventEmitter<undefined> =
    new EventEmitter<undefined>();

    posicoes: any[] = [];

  constructor(private service: PrincipalService) {}

  ngOnInit(): void {
    this.listarPosicoes();
  }

  jogador!: Jogador;
  criarJogador(form: NgForm) {
    this.jogador = {
      nome: form.value.nome,
      idPosicao: parseInt(form.value.idPosicao),
    }
    console.log(form.value);
    this.service.criar(this.jogador).subscribe(() => {
      console.log('Jogador criado com sucesso!');
      this.jogadorCriado.emit(form.value); // Emit the created player
      form.reset(); // Reset the form after submission
    });
  }

    listarPosicoes(){
    this.service.getListaPosicao().subscribe((data: any) => {
      this.posicoes = data;
      console.log(this.posicoes);
    });
  }
}
