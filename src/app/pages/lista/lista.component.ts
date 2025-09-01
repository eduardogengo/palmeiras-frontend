import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../services/principal.service';
import { CriarComponent } from '../criar/criar.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Jogador } from '../../interfaces/jogador.interface';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CriarComponent, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {

  jogadores: Jogador[] = [];
  

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.listarJogadores();
  }
  
  listarJogadores(){
    this.principalService.getLista().subscribe((data: any) => {
      this.jogadores = data;
      console.log(this.jogadores);
    });
  }



  excluirJogador(id: string) {
    this.principalService.excluir(id).subscribe(() => {
      this.listarJogadores();
      console.log(`Jogador com ID ${id} excluído com sucesso.`);
    }, error => {
      console.error(`Erro ao excluir jogador com ID ${id}:`, error);
    });
}

}
