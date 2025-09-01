import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogador } from '../interfaces/jogador.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  baseUrl = 'https://palmeiras-backend.vercel.app';
  // baseUrl = 'localhost:3000'

  constructor(private http: HttpClient) {}
  getLista(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(`${this.baseUrl}/jogadores`).pipe(
      map((data) => {
        return data.map((item) => ({
          id: item.id,
          nome: item.nome,
          posicao: item.posicao,
        }));
      })
    );
  }

  getListaPosicao() {
    return this.http.get(`${this.baseUrl}/posicao`);
    // return this.http.get('http://localhost:3000/jogadores');
  }

  criar(jogador: Jogador) {
    // transformando o jogador para o formato esperado pelo backend
    const jogadorData = {
      nome: jogador.nome,
      idPosicao: jogador.idPosicao,
    };
    console.log('Jogador enviado:', jogadorData);
    return this.http.post(`${this.baseUrl}/jogadores`, jogadorData);
    // return this.http.get('http://localhost:3000/jogadores');
  }

  excluir(id: string) {
    return this.http.delete(`${this.baseUrl}/jogadores/${id}`);
    // return this.http.get('http://localhost:3000/jogadores');
  }
}
