export interface Jogador {
  id?: string;
  nome: string;
  posicao?: string;
  idPosicao?: number;
}

export interface JogadorApiResponse {
  id: string;
  nome: string;
  descricao: string;
}
