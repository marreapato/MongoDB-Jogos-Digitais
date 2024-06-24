//queries de insercao
//queries de analise
//queries de extra
use project3cin

show collections

//ponto 33 - criacao de indice de texto + 34 - uso do search para busca + 2 find + 26 pretty + 16 limit + 39 skip

db.desenvolvedorasJogosPerfis.createIndex({ "comentarios.comentario": "text" });
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).count();// total documento que fala de jogos
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).pretty();// restante dos documentos

//usuarios com mais de 25 anos

db.usuarios.find({$where:"this.idade>25"});  

// ponto 4 + ponto 8 + 9 + 13 media das avaliacoes dos sites por genero de jogo

db.desenvolvedorasJogosPerfis.aggregate([{ $unwind: "$jogosDesenvolvidos"},{ $unwind: "$jogosDesenvolvidos.criticas"},
{$group: {
      _id: "$jogosDesenvolvidos.genero",
      avgAvaliacao: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }},{$sort:{ "avgAvaliacao": 1}}
]);


//todos usuarios que jogam Grand Theft Auto IV
    
db.usuarios.find({ "jogos.jogo": { $all: ["Grand Theft Auto IV"]}});

//quantidade de usuarios por jogo    
    
db.usuarios.aggregate([
    {
        $unwind: "$jogos"
    },{$sortByCount: "$jogos.jogo"},{$project:{"totalUsuarios":"$count"}}]);

    
//retornar todas as empresas que obtiveram a indicacao maxima

db.desenvolvedorasJogosPerfis.aggregate([
    { $unwind: "$comentarios" },
    {$match: {"comentarios.indicacao": {$gte:10}}},
    {$project: {
            nomeEmpresa: "$nome",
            jogoDesenvolvido: "$jogosDesenvolvidos.titulo",
            indicacao:"$comentarios.indicacao",
            usuario:"$comentarios.usuario"
        }
    },{$group:{_id:"$nomeEmpresa",usuariosQueIndicaram:{$addToSet:"$usuario"}}}
]);

//Jogos que possuem baixa avaliacao  

db.desenvolvedorasJogosPerfis.aggregate([
   { $unwind: "$jogosDesenvolvidos" },
   { $project: {_id: "$jogosDesenvolvidos.titulo",
         critica_site: {
            $filter: {
               input: "$jogosDesenvolvidos.criticas",
               as: "critica",
               cond: { $lt: [ "$$critica.avaliacao", 8] }
            }
         }
      }
   },{ $match: { "critica_site.0": { $exists: true } } }
]);

// total de jogos por classificacao indicativa
   
db.desenvolvedorasJogosPerfis.aggregate([{$unwind:"$jogosDesenvolvidos"},
{$group:{_id:"$jogosDesenvolvidos.classificacaoIndicativa",
    totalJogos:{$sum:1}}},{$sort:{"totalJogos":1}}]);

//percentual de horas de cada jogo (ou horas jogadas por cada jogo) por usuario  
  
db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},
  {
    $project: {
      _id: "$nickname",
      nickname: 1,
      jogo: "$jogos.jogo",
      percentualHoras: "$jogos.percentualHoras",
      quantidadeHoras: "$detalhesDoJogo.jogosDesenvolvidos.quantidadeHoras",
      horasJogadas:{$multiply:["$detalhesDoJogo.jogosDesenvolvidos.quantidadeHoras","$jogos.percentualHoras"]}
    }
  },{$group: {
      _id: "$nickname",
      jogos: {
        $addToSet: {
          jogo: "$jogo",
          percentualHoras: "$percentualHoras",
          quantidadeHoras: "$quantidadeHoras",
          horasJogadas: "$horasJogadas"
        }
      }
    }}
]);
    
// Primeiro Jogo do usuario, classificação e total gasto

db.usuarios.aggregate([{$unwind: "$jogos" },

{
  $lookup: {
    from: "desenvolvedorasJogosPerfis",
    let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
    as: "empresaInfo"
  }
},{$unwind:"$empresaInfo"},
{$group: { _id: "$nickname",
    totalGasto:{$sum:"$empresaInfo.jogosDesenvolvidos.preco"},quantidadeJogos:{$sum:1},
    precoMax:{$max:"$empresaInfo.jogosDesenvolvidos.preco"},
    primeiroJogo: { $first: "$empresaInfo.jogosDesenvolvidos.titulo" }}},{$project:{"quantidadeJogos":1,"totalGasto":1,"precoMax":1,"primeiroJogo":1,
        statusJogador: { $cond: { if: {$gte:["$totalGasto", 100] }, then: "Promissor", else: "Standard"}}}}]);

        
//faturamento de cada empresa e quantidade vendida
    

db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},{$group: { _id: "$detalhesDoJogo.nome",
    totalFaturado:{$sum:"$detalhesDoJogo.jogosDesenvolvidos.preco"},quantidadeVendida:{$sum:1}}}])

//valor arrecadado por jogo
    
db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},{$group: { _id: "$detalhesDoJogo.jogosDesenvolvidos.titulo",
    totalFaturado:{$sum:"$detalhesDoJogo.jogosDesenvolvidos.preco"},quantidadeVendida:{$sum:1}}}]);
            
    
//quantidade de jogos de cada empresa

db.desenvolvedorasJogosPerfis.aggregate([{$unwind:"$jogosDesenvolvidos"},
{$sortByCount: "$nome"},{$project:{"totalJogos":"$count"}}]);
    
//jogos com 3 idiomas ou mais

db.desenvolvedorasJogosPerfis.aggregate([
    { $unwind: "$jogosDesenvolvidos" },
    { $match: { $expr: { $gte: [ { $size: "$jogosDesenvolvidos.idiomasDisponiveis" }, 4 ] } } },
    {$project:{_id:"$jogosDesenvolvidos.titulo",idiomas:"$jogosDesenvolvidos.idiomasDisponiveis"}}
]);
    

//jogos que nao tiveram nenhuma venda (mais dificil)
    
db.desenvolvedorasJogosPerfis.aggregate([{$unwind:"$jogosDesenvolvidos"},
{$lookup:{
    from:"usuarios",
    let:{jogo:"$jogosDesenvolvidos.titulo"},
    pipeline:[{$unwind:"$jogos"},
    {$match:{$expr:{$eq:["$jogos.jogo","$$jogo"]}}}],
    as:"usuariosDejogo"}},{$match: { "usuariosDejogo": { $size: 0 } } },{$project:{_id:"$jogosDesenvolvidos.titulo",
        "empresa":"$nome","info":"$jogosDesenvolvidos"}}]);

//extras
    
//selecionando uma amostra de 5    
db.usuarios.aggregate([{ $sample: { size: 5 } }]);

//uma empresa com sede nos EUA   
db.desenvolvedorasJogosPerfis.findOne({ "paisOrigem": "EUA" });

//skip pula os 5 primeiros documentos
db.usuarios.find().skip(5);

//concatenation a criacao de um id de usuario com base no nome e nickname

db.usuarios.aggregate([{ $project: { CodName: {$concat:[{$toUpper:{$substr: ["$nome", 0, 4] }},"-",{$toUpper:"$nickname"}]} }},{$limit:3} ]);


//encontra valores em comum entre documentos e arrays

db.usuarios.aggregate([{ $project: {nome:1, commonGames: { $setIntersection: ["$jogos.jogo", ["The Last of Us"]] } } },
{ $match: { $expr: { $gt: [ { $size: "$commonGames" }, 0 ] } } }
]);

//checa se é subset

db.usuarios.aggregate([{ $project: { isSubset: { $setIsSubset: [["The Last of Us"], "$jogos.jogo"] } } }]);

//Combina elemento de arrays

db.usuarios.aggregate([{ $project: {nome:1,todosOsJogos: { $setUnion: ["$jogos.jogo", ["The Last of Us"]] } } }]);

//Compara duas strings para checar se uma tem uma ordem superior a da otura

db.usuarios.aggregate([{ $project: { comparison: { $strcasecmp: ["$nome", "$nickname"] } } }]);

//Compara duas strings para checar se uma tem uma ordem superior a da otura

db.usuarios.aggregate([{ $project: { comparison: { $strcasecmp: ["$nome", "$nickname"] } } }]);

//media de horas de cada genero de jogo

var map = function(){emit(this.acessoAntecipado,this.idade)};
var reduce = function(Acesso,Idade){return Array.avg(Idade);};

db.usuarios.mapReduce(map,reduce,{out:"mediares"});

db.mediares.find();

//uso de FUNCTION mais especifico

//usuarios com mais de 27 anos

// Define a function
function findUsersAboveAge() {
    var chosenAge = 27; // age

    return db.usuarios.find({ idade: { $gt: chosenAge } }).toArray();
}


findUsersAboveAge();

