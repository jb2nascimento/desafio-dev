import { Posicao } from '../models/Posicao';

export class LayoutArquivo {

    private constructor() {}

    static tipo: Posicao = { inicio: 1, fim: 1 };

    static data: Posicao = { inicio: 2, fim: 9 };

    static valor: Posicao = { inicio: 10, fim: 19 };

    static cpf: Posicao = { inicio: 20, fim: 30 };

    static cartao: Posicao = { inicio: 31, fim: 42 };

    static hora: Posicao = { inicio: 43, fim: 48 };

    static donoLoja: Posicao = { inicio: 49, fim: 62 };
    
    static nomeLoja: Posicao = { inicio: 63, fim: 81 };
    
}