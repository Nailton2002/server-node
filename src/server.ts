//import express from 'express';
//import cors from 'cors';
import path from 'path';
import routes from './routes';

//const app = express();

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSucessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Get: Buscar e Lista, uma ou mais informações do back-end
//Post: Criar uma nova informação no back-end
//Put: Atualizar uma informação existente no back-end
//Delete: Remover uma informação do back-end

//Request Param: Parâmetros que vem na própria rota que identificam um recurso (obrigatórios)
//Query Param: Parâmetros serve para procurar (opcionais), serve para filtros, paginação...
//RequestnBody: Parâmetros para criação/atualização de informação