import { TipoTransacao } from '../models/TipoTransacao';

export function tipoTransacaoValueOf(tipo: number): TipoTransacao {
    return TipoTransacao[TipoTransacao[tipo] as keyof typeof TipoTransacao];
}
