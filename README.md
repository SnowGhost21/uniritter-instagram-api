# uniritter-instagram-api
[![Build Status](https://travis-ci.com/SnowGhost21/uniritter-instagram-api.svg?branch=master)](https://travis-ci.com/SnowGhost21/uniritter-instagram-api)

Esta é uma api para criar usuários e com eles poder inserir fotos e ver fotos de um determinado usuário.

# Arquitetura

A arquitetura foi dividida em camadas especificas para que cada uma tenha sua responsabilidade especifica e elas são:

## Repository

Camada responsável pelas chamadas de dados junto ao MongoDB ou ao Cloudinary para realizar e salvar imagens no Cloudinary.

## Controller

Camada responsável pela regra de negócios da aplicação, nela são aplicados e computados os dados necessários para a resposta do usuário.

## Routes

As rotas foram divididas de acordo com sua responsabilidade, desta forma ficam organizadas de acordo com a regra de negócio.

# Testes

Foi se utilizado o Jest para aplicação de testes da camada de controller, onde se foi criado mocks para chamadas do repositório, uma vez que utilizamos o MongoDB para salvar dados.

#Bibliotecas
* [Jest](https://jestjs.io/) para testes unitários
* [Express](https://expressjs.com/pt-br/) para monitoramento e controle de chamadas de rede
* [Cloudinary](https://cloudinary.com/) para salvar as imagens remotamente
* [Formidable](https://www.npmjs.com/package/formidable) para lidar com envio de imagens via API.

