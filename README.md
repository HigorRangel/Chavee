# Chavee
Projeto desenvolvido para a disciplina de Desenvolvimento de Sistemas Web

O projeto em questão trata-se de um sistema de controle de entrada e saída de chaves para imobiliárias, desenvolvido com fins acadêmicos. Para sua implementação, foram utilizadas as seguintes tecnologias: Node.js no Back-End, React.js e Bootstrap no Front-End. Além disso, o armazenamento de dados foi realizado através do banco de dados MySql.

Tela de Login:

![chavee-1](https://user-images.githubusercontent.com/35838301/233512313-95e8d95c-926c-4c2b-8cd7-2d81e6ac43fe.png)

Cargos:
![chavee-2](https://user-images.githubusercontent.com/35838301/233512400-8cf5598d-e922-44d3-8708-42067a23e1b5.png)

Cadastro de Cargos:
![chavee-3](https://user-images.githubusercontent.com/35838301/233512424-8d5620fb-24f9-42ca-a7f5-9d124b45f61e.png)

# Como instalar 

> ### Back-End

1) Instale o NVM (https://github.com/coreybutler/nvm-windows/releases)

2) Instale o Node na versão 15.14.0:
    nvm install 15.14.0

3) Defina a versão de utilização:
    nvm use 15.14.0
    (Caso já haja alguma versão instalada, você pode usar o nvm para transitar entre as versões)
    
4) Entre na pasta de back-end:
    cd backend
    
5) Instale as dependências do projeto
    npm install
    
6) Instale o nodemon
    npm install nodemon -g --save

7) Inicie o Servidor
    nodemon app
    
    
> ### Front-End

1) Em outro terminal, acesse a pasta frontend?
    cd frontend

2) Instale as dependências do projeto
    npm install

3) Defina a versão de utilização:
    nvm use 15.14.0
    (Caso já haja alguma versão instalada, você pode usar o nvm para transitar entre as versões)
    
4) Entre na pasta de back-end:
    cd backend
    
5) Instale as dependências do projeto
    npm install --legacy-peer-deps
    
6) Inicie o servidor front-end
    npm start
    

> ### Banco de Dados

1) Instale o MySQL
    https://dev.mysql.com/downloads/installer/
    
2) Crie um banco de dados

3) Execute o arquivo scripts.sql


> ### Acesse a aplicação

1) Abra a URL http://localhost:3000/login

2) Faça o login com as seguintes credenciais:
    **E-mail**: user@teste.comuser@teste.com
    **Senha**: 123456



