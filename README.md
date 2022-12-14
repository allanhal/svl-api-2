
# svl-api
Projeto de sistema de venda de livros

# Configurando o projeto - Primeiros passos

1. github
readme.md

2. Clone do projeto 
git glone [url_projeto]

3. Iniciando o projeto (Dentro da pasta)
npm init -y

4. Instalar nodemon

npm i nodemon -D -S

4. 1 Configurar o package.jason "start" : "nodemon server.js"

para iniciar o servidor dar o comando npm start

em package.json add em scripts : "start"

5. Instalar o express e o mongoose

npm i express mongoose -S

6. Criar o arquivo ./server.js na raiz

7. Iniciar o server.js utilizando o express

8. Criar o arquivo .gitignore e escrever dentro /node_modules

9. Configurar a base no mongo (Atlas)

## COnfiguração banco

1. Entrar no mongo DB atlas

2. Criar um novo projeto

3. Nome do projeto 

4. Criar o cluster escolhendo o free, shared

5. Provedor do cluster: AWS

6. Escolher a Região SP

7. Cluster name: e=svl-db

8. Criar o Cluster - Create Cluster

9. Configuração user/password
use: fs01
pass: fs01

10. create user 

11. IP do banco - add my current IP adress

12. Finish and close

13. Go to database

14. Browse Collection : lista os bancos de dados deste cluster.

15. Add my own data : Adicionar meus proprios dados

16. Create data base
database name : svl
collection name: livros

17. svl.livros (database/collection)

18. {
    id: gerado automaticamente,
    "titulo": "titulo 01"
    "ano": 2015,
    "autor":  "autor 01",
    "editora": "editora 01",
    "numero paginas": "125"
}

# Configurando a conexao do banco no node

## Criar o arquivo de conexâo usando o mongoose

1. Criar uma pasta /config, criar o arquivo db.js

2. Importe o mongoose e apartir dele chamar o metodo conect

3. No mongo atlas -> Databases -> Connect -> MongoDB Drivers

4. Copiar a string de conexão -> mongodb+srv....

5. Importar o arquivo db.js no server. js

 buscar processo pela porta pelo 

pid netstat -ano | findstr :<PORT>

# Criando rotas

1. Criar uma pasta na raiz /controlllers

2. Criar o arquivo LivroController.js
