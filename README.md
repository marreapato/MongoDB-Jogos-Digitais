# Banco de Dados NoSQL para Site de Jogos Digitais com MongoDB

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green)](https://www.mongodb.com/)

Este repositório contém um projeto prático de desenvolvimento de um banco de dados NoSQL utilizando MongoDB para um site de jogos digitais. O projeto abrange a modelagem detalhada das coleções `usuarios`, `empresasProdutorasDeGames` e `jogosVideoGame`, além da integração dessas informações na coleção unificada `desenvolvedorasJogosPerfis` usando o operador `lookup`.

## Artigo no Medium

Confira o artigo completo no Medium, onde detalho passo a passo como criar um banco de dados NoSQL para um site de jogos digitais usando MongoDB:

[Como Criar um Banco de Dados NoSQL para um Site de Jogos Digitais usando MongoDB - Tutorial Completo](https://medium.com/@lucasrabeloufba/como-criar-um-banco-de-dados-nosql-para-um-site-de-jogos-digitais-usando-mongodb-tutorial-completo-b0413da5f31e)

## Estrutura do Projeto

- `modelagem/`: Contém os arquivos de modelagem inicial das coleções MongoDB, incluindo detalhes sobre os documentos de usuários, empresas desenvolvedoras de jogos e jogos em si.
- `consultas_avancadas/`: Exemplos práticos de consultas avançadas usando MongoDB Shell para extrair informações específicas sobre usuários e jogos da plataforma.
- `otimizacao_desempenho/`: Estratégias e técnicas para otimização de desempenho do MongoDB, abordando índices, agregações e práticas recomendadas.
