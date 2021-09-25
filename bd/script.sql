--
-- File generated with SQLiteStudio v3.3.3 on seg set 6 21:46:32 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: cliente
CREATE TABLE cliente (cli_codigo INTEGER PRIMARY KEY, cli_descricao STRING (40) NOT NULL, cli_endereco STRING (60), cli_cep STRING (18), cli_bairro STRING (20), cli_telefone STRING (16), cli_email STRING (255), cli_pj BOOLEAN);
INSERT INTO cliente (cli_codigo, cli_descricao, cli_endereco, cli_cep, cli_bairro, cli_telefone, cli_email, cli_pj) VALUES (1, 'Diegos', 'Rua exemplo', '40000-000', 'exemplo', '(71) 90000-0000', 'exeplo@exexmplo.com', 'false');
INSERT INTO cliente (cli_codigo, cli_descricao, cli_endereco, cli_cep, cli_bairro, cli_telefone, cli_email, cli_pj) VALUES (2, 'Heitor da Silvas', 'heitorlandia', '40000-000', 'Santo Heitor', '(71) 00000-0000', 'heitors@gmail.com', 'false');

-- Table: servico
CREATE TABLE servico (ser_codigo INTEGER PRIMARY KEY, cli_codigo INTEGER REFERENCES cliente (cli_codigo), tps_codigo INTEGER REFERENCES tipo_servico (tps_codigo) NOT NULL, tpp_codigo INTEGER REFERENCES tipo_pagamento (tpp_codigo), ser_marca STRING (40), ser_numeroserie STRING (40), ser_modelo STRING (40), ser_dataentrada DATE NOT NULL, ser_datasaida DATE, ser_datapagamento DATE, ser_valorpagamento DOUBLE, ser_externo BOOLEAN, ser_observacao STRING (2000), tpprod_codigo INTEGER REFERENCES tipo_produto (tpprod_codigo));
INSERT INTO servico (ser_codigo, cli_codigo, tps_codigo, tpp_codigo, ser_marca, ser_numeroserie, ser_modelo, ser_dataentrada, ser_datasaida, ser_datapagamento, ser_valorpagamento, ser_externo, ser_observacao, tpprod_codigo) VALUES (3, NULL, 3, NULL, '', '', '', '07/08/2021', '', '', 0.0, 0, '', NULL);
INSERT INTO servico (ser_codigo, cli_codigo, tps_codigo, tpp_codigo, ser_marca, ser_numeroserie, ser_modelo, ser_dataentrada, ser_datasaida, ser_datapagamento, ser_valorpagamento, ser_externo, ser_observacao, tpprod_codigo) VALUES (4, NULL, 3, NULL, '', '', '', '07/08/2021', '', '', 0.0, 0, '', NULL);
INSERT INTO servico (ser_codigo, cli_codigo, tps_codigo, tpp_codigo, ser_marca, ser_numeroserie, ser_modelo, ser_dataentrada, ser_datasaida, ser_datapagamento, ser_valorpagamento, ser_externo, ser_observacao, tpprod_codigo) VALUES (5, 2, 2, 2, 'samsung', 1231213, 'a4144', '14/08/2021', '', '', 0.0, 0, 'Criança derrubou suco teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres
 teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres teste de caracteres





 teste de caracteres


 teste de caracteres', 1);
INSERT INTO servico (ser_codigo, cli_codigo, tps_codigo, tpp_codigo, ser_marca, ser_numeroserie, ser_modelo, ser_dataentrada, ser_datasaida, ser_datapagamento, ser_valorpagamento, ser_externo, ser_observacao, tpprod_codigo) VALUES (6, 1, 1, 2, 'XIAOMI', 123123, 'note7', '14/08/2021', '', '', 100.0, 1, 'display e touch quebrado', 3);

-- Table: tipo_pagamento
CREATE TABLE tipo_pagamento (tpp_codigo INTEGER PRIMARY KEY, tpp_descricao STRING (20) NOT NULL);
INSERT INTO tipo_pagamento (tpp_codigo, tpp_descricao) VALUES (1, 'DEBITO');
INSERT INTO tipo_pagamento (tpp_codigo, tpp_descricao) VALUES (2, 'ESPECIE');
INSERT INTO tipo_pagamento (tpp_codigo, tpp_descricao) VALUES (3, 'CREDITO');

-- Table: tipo_produto
CREATE TABLE tipo_produto (tpprod_codigo INTEGER PRIMARY KEY, tpprod_descricao STRING (30) NOT NULL);
INSERT INTO tipo_produto (tpprod_codigo, tpprod_descricao) VALUES (1, 'TV');
INSERT INTO tipo_produto (tpprod_codigo, tpprod_descricao) VALUES (2, 'RADIO');
INSERT INTO tipo_produto (tpprod_codigo, tpprod_descricao) VALUES (3, 'SMARTPHONE');

-- Table: tipo_servico
CREATE TABLE tipo_servico (tps_codigo INTEGER PRIMARY KEY, tps_descricao STRING (20) NOT NULL);
INSERT INTO tipo_servico (tps_codigo, tps_descricao) VALUES (1, 'Conserto');
INSERT INTO tipo_servico (tps_codigo, tps_descricao) VALUES (2, 'Limpeza');
INSERT INTO tipo_servico (tps_codigo, tps_descricao) VALUES (3, 'Manutenção Preventiva ');

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
