import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogador } from '../interfaces/jogador.interface';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  baseUrl = 'https://palmeiras-backend.vercel.app'

  constructor(private http: HttpClient) { 
  }
  getLista() {
    return this.http.get(`${this.baseUrl}/jogadores`);  
    // return this.http.get('http://localhost:3000/jogadores');  
  }

  criar(jogador: Jogador) {
    // transformando o jogador para o formato esperado pelo backend
    const jogadorData = {
      nome: jogador.nome,
      posicao: jogador.posicao
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
