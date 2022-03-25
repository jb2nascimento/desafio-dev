export enum TipoTransacao {
    "Débito" = 1,
    "Boleto" = 2,
    "Financiamento" = 3,
    "Crédito" = 4,
    "Recebimento Empréstimo" = 5,
    "Vendas" = 6,
    "Recebimento TED" = 7,
    "Recebimento DOC" = 8,
    "Aluguel" = 9
}

export namespace TipoTransacao {
    export function naturezaOperacao(tipo: number) {
        return tipo == 1 || tipo == 4 || tipo == 5 || tipo == 6 || tipo == 7 || tipo == 8 ? "+" : "-";
    }
}
