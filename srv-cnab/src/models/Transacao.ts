import { TipoTransacao } from "./TipoTransacao";

export class Transacao {
    
    tipo: string;
    data: string;
    valor: string;
    cpf: string;
    cartao: string;
    hora: string;
    donaLoja: string;
    nomeLoja: string;

    public static builder(): TransacaoBuilder {
        return new TransacaoBuilder();
    }
}

export class TransacaoBuilder {

    private readonly _transacao: Transacao;

    constructor() {
        this._transacao = {
            tipo: null,
            cartao: null,
            cpf: null,
            data: null,
            donaLoja: null,
            hora: null,
            nomeLoja: null,
            valor: null
        }
    }

    public tipo(tipo: string): TransacaoBuilder {
        this._transacao.tipo = tipo;
        return this;
    }

    public cartao(cartao: string): TransacaoBuilder {
        this._transacao.cartao = cartao;
        return this;
    }

    public cpf(cpf: string): TransacaoBuilder {
        this._transacao.cpf = cpf;
        return this;
    }

    public data(data: string): TransacaoBuilder {
        this._transacao.data = data;
        return this;
    }

    public donoLoja(donoLoja: string): TransacaoBuilder {
        this._transacao.donaLoja = donoLoja;
        return this;
    }

    public hora(hora: string): TransacaoBuilder {
        this._transacao.hora = hora;
        return this;
    }

    public nomeLoja(nomeLoja: string): TransacaoBuilder {
        this._transacao.nomeLoja = nomeLoja;
        return this;
    }

    public valor(valor: string): TransacaoBuilder {
        this._transacao.valor = valor;
        return this;
    }

    public build(): Transacao {
        return this._transacao;
    }

}