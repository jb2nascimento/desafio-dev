import Logger from "../config/logger/Logger";
import { LayoutArquivo } from "../models/LayoutArquivo";
import { CNABServiceDao } from "../dao/CNABServiceDao";
import { Posicao } from "../models/Posicao";
import { Transacao } from "../models/Transacao";
import moment from "moment";
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
                .data(this.getFileField(LayoutArquivo.data, line))
                .donoLoja(this.getFileField(LayoutArquivo.donoLoja, line))
                .hora(this.getFileField(LayoutArquivo.hora, line))
                .nomeLoja(this.getFileField(LayoutArquivo.nomeLoja, line))
                .valor(this.getFileField(LayoutArquivo.valor, line))
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
                    .valor(item.valor / 100)
                    .hora(item.hora)
                    .data(moment(item.data).format('YYYY/MM/DD'))
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

}