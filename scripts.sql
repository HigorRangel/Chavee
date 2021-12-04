CREATE DATABASE chavee;
USE chavee;


CREATE TABLE imobiliaria (
	id INT NOT NULL auto_increment,
    nome_fantasia VARCHAR(100) NOT NULL,
	razao_social VARCHAR(100) NOT NULL,
    cnpj varchar(14),
    data_cadastro datetime not null default now(),
    
    primary key(id)
);


CREATE TABLE cargo (
	id int not null auto_increment,
    descricao varchar(50) not null,
    nivel_acesso int not null, 
    cod_imobiliaria int not null,
    situacao int not null default 1,
    
    primary key(id),
    foreign key (cod_imobiliaria) references imobiliaria(id)
);

CREATE TABLE usuario (
	id int not null auto_increment,
    primeiro_nome varchar(25) not null,
    nomes_meio varchar(50),
    ultimo_nome varchar(25) not null,
    email varchar(100) not null,
    senha char(32) not null,
    contato varchar(12),
    situacao int not null default 1,
    cod_cargo int not null,
    
    primary key (id),
    foreign key (cod_cargo) references cargo(id)
);

create table chave(
	id int not null auto_increment,
    proprietario varchar(50) not null,
    contato varchar(12),
    rua varchar(100) not null,
    bairro varchar(50) not null,
    cidade varchar(30) not null,
    estado varchar(2) not null,
    numero varchar(15),
    complemento varchar (50),
    situacao int not null default 1,
    finalidade int not null,
    categoria_imovel int not null,
    cod_interno varchar(10),
    cod_imovel varchar(10),
    observacao varchar(256),
    usuario int not null,
    
    primary key(id),
    foreign key (usuario) references usuario (id)
);

create table operacao (
	id int not null auto_increment,
    tipo_doc varchar(30),
    documento varchar(20),
	nome_cliente varchar(100),
    data_retirada datetime default now(),
	descricao_retirada varchar(256) ,
	entrega_prevista datetime,
	descricao_devolucao varchar (256),
	data_devolucao datetime,
    cod_chave int not null,
    cod_usuario int not null,
    situacao int not null default 1,
    
    primary key (id),
    foreign key(cod_chave) references chave(id),
    foreign key(cod_usuario) references usuario(id)
);

DELIMITER $$

CREATE PROCEDURE criaImobiliaria(nomeFantasia VARCHAR(100), razaoSocial VARCHAR(100), cnpj VARCHAR(14), nomeCargo VARCHAR(50), 
                                    primeiroNome VARCHAR(25), nomesMeio VARCHAR(50), ultimoNome VARCHAR(25), email VARCHAR(100),
                                    contato VARCHAR(12), senha VARCHAR(16))
BEGIN
    insert into imobiliaria (nome_fantasia, razao_social, cnpj) 
    values (nomeFantasia, razaoSocial, cnpj);

    insert into cargo (descricao, nivel_acesso, cod_imobiliaria)
    values (nomeCargo, 1, (SELECT max(id) from imobiliaria ));

    insert into usuario (primeiro_nome, nomes_meio, ultimo_nome, email, senha, contato, situacao, cod_cargo)
    values (primeiroNome, nomesMeio, ultimoNome, email, md5(senha), contato, 1, (SELECT max(id) from cargo));
END $$
DELIMITER ; 