import Logger from "../config/logger/Logger";
import { LayoutArquivo } from "../models/LayoutArquivo";
import { CNABServiceDao } from "../dao/CNABServiceDao";
import { Posicao } from "../models/Posicao";
import { Transacao } from "../models/Transacao";
import moment from "moment";
import momentTz from 'moment-timezone';
import { TipoTransacao } from "../models/TipoTransacao";

export class CNABService {

    constructor(
        private logger: Logger = new Logger(),
        private dao: CNABServiceDao = new CNABServiceDao()
    ) { }

    public async importCNABFile(file: string) {

        file.trim().split(/\r?\n/).forEach(line => {

            let transacao: Transacao = Transacao.builder()
                .tipo(this.getFileField(LayoutArquivo.tipo, line))
                .cartao(this.getFileField(LayoutArquivo.cartao, line))
                .cpf(this.getFileField(LayoutArquivo.cpf, line))
                .data(this.formatDate(this.getFileField(LayoutArquivo.data, line)))
                .donoLoja(this.getFileField(LayoutArquivo.donoLoja, line))
                .hora(this.formatHour(this.getFileField(LayoutArquivo.hora, line)))
                .nomeLoja(this.getFileField(LayoutArquivo.nomeLoja, line))
                .valor(this.formatValue(this.getFileField(LayoutArquivo.valor, line)))
                .build();

            this.dao.save(transacao);
        });
    }

    public async selectAll() {

        let itens = await this.dao.findAll();
        let transacoes: Array<Transacao> = [];

        itens[0].map((item: any) => {
            transacoes.push(
                Transacao.builder()
                    .tipo(TipoTransacao[item.tipo])
                    .cartao(item.cartao)
                    .cpf(item.cpf)               
                    .natureza(TipoTransacao.naturezaOperacao(item.tipo))
                    .valor(item.valor)
                    .hora(item.hora)
                    .data(item.data)
                    .donoLoja(item.dono_da_loja)
                    .nomeLoja(item.nome_loja)
                    .build()
            )
        });

        return transacoes;
    }

    private getFileField(posicao: Posicao, linha: string): any {
        return linha.substring(posicao.inicio - 1, posicao.fim).trim();
    }

    private formatHour(hour: string): string {
        let mom = momentTz(hour, 'HHmmss');
        return mom.tz('America/Sao_Paulo').format('HH:mm:ss');
    }
    
    private formatDate(date: string): string {
        return moment(date).format('DD/MM/YYYY');
    }

    private formatValue(value: string): string {
        return value ? parseFloat(value) / 100.00 + '' : 0.00 + '';
    }

}