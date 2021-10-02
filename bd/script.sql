--
-- File generated with SQLiteStudio v3.3.3 on qui set 30 13:21:10 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: cliente
CREATE TABLE cliente (cli_codigo INTEGER PRIMARY KEY, cli_descricao STRING (40) NOT NULL, cli_endereco STRING (60), cli_cep STRING (18), cli_bairro STRING (20), cli_telefone STRING (16), cli_email STRING (255), cli_pj BOOLEAN);

-- Table: servico
CREATE TABLE servico (ser_codigo INTEGER PRIMARY KEY, cli_codigo INTEGER REFERENCES cliente (cli_codigo) NOT NULL, tps_codigo INTEGER REFERENCES tipo_servico (tps_codigo) NOT NULL, tpp_codigo INTEGER REFERENCES tipo_pagamento (tpp_codigo) NOT NULL, ser_marca STRING (40), ser_numeroserie STRING (40), ser_modelo STRING (40), ser_dataentrada DATE, ser_datasaida DATE, ser_datapagamento DATE, ser_valorpagamento DOUBLE, ser_externo BOOLEAN, ser_observacao STRING (2000), tpprod_codigo INTEGER REFERENCES tipo_produto (tpprod_codigo) NOT NULL);

-- Table: tipo_pagamento
CREATE TABLE tipo_pagamento (tpp_codigo INTEGER PRIMARY KEY, tpp_descricao STRING (20) NOT NULL);

-- Table: tipo_produto
CREATE TABLE tipo_produto (tpprod_codigo INTEGER PRIMARY KEY, tpprod_descricao STRING (30) NOT NULL);

-- Table: tipo_servico
CREATE TABLE tipo_servico (tps_codigo INTEGER PRIMARY KEY, tps_descricao STRING (20) NOT NULL);

-- Table: usuario
CREATE TABLE usuario (usu_codigo INTEGER PRIMARY KEY, usu_nome STRING (80) NOT NULL, usu_login STRING (20) UNIQUE NOT NULL, uus_senha STRING (18) NOT NULL);

-- View: view_servico
CREATE VIEW view_servico AS
SELECT ser.*, cli.cli_descricao, cli.cli_cep, tpp.tpp_descricao, tprod.tpprod_descricao, tps.tps_descricao
FROM servico ser join cliente cli on ser.cli_codigo = cli.cli_codigo
join tipo_pagamento tpp on ser.tpp_codigo = tpp.tpp_codigo
join  tipo_produto tprod on ser.tpprod_codigo = tprod.tpprod_codigo
join tipo_servico tps on ser.tps_codigo = tps.tps_codigo;

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
