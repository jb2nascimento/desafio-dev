CREATE DATABASE db_desafio_dev;
GO

USE db_desafio_dev;
GO

CREATE TABLE tb_cnab
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    tipo SMALLINT NOT NULL,
    data VARCHAR(10) NOT NULL,
    valor VARCHAR(30),
    cpf VARCHAR(11),
    cartao VARCHAR(12),
    hora VARCHAR(8),
    dono_da_loja VARCHAR(14),
    nome_loja VARCHAR(19)
)