import sql from 'mssql';
import { Transacao } from 'src/models/Transacao';

export class CNABServiceDao {

    private _config = {
        user: process.env.DATABASE_USUARIO,
        password: process.env.DATABASE_SENHA,
        server: process.env.DATABASE_SERVIDOR,
        database: process.env.DATABASE,
        synchronize: true,
        trustServerCertificate: true,
    };

    public findAll = async () => {
        let pool = sql.connect(this._config);
        let transacoes = (await pool).request().query('SELECT * FROM tb_cnab');
        return (await transacoes).recordsets;
    }

    public removeAll = async() => {
        let pool = sql.connect(this._config);
        let query = (await pool).request().query('DELETE tb_cnab');
        return (await query).recordsets;
    }

    public save = async (transacao: Transacao) => {

        let pool = sql.connect(this._config);

        let insertTransacoes = (await pool).request()
            .input('tipo', sql.SmallInt, transacao.tipo)
            .input('data', sql.NVarChar, transacao.data)
            .input('valor', sql.NVarChar, transacao.valor)
            .input('cpf', sql.NVarChar, transacao.cpf)
            .input('cartao', sql.NVarChar, transacao.cartao)
            .input('hora', sql.NVarChar, transacao.hora)
            .input('dono_da_loja', sql.NVarChar, transacao.donaLoja)
            .input('nome_loja', sql.NVarChar, transacao.nomeLoja)
            .query('INSERT INTO tb_cnab (tipo, data, valor, cpf, cartao, hora, dono_da_loja, nome_loja) VALUES (@tipo, @data, @valor, @cpf, @cartao, @hora, @dono_da_loja, @nome_loja)');

        return (await insertTransacoes).recordsets;
    }


}