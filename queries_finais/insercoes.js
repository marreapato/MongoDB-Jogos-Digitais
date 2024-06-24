// Insere a coleção de usuários

    
db.usuarios.insertMany([
    {
        "nome": "João Silva",
        "idade": 30,
        "email": "joao.silva@example.com",
        "jogos": [
            {"jogo": "The Last of Us", "percentualHoras": 0.4}, 
            {"jogo": "Grand Theft Auto V", "percentualHoras": 0.3}
        ],
        "acessoAntecipado": true,
        "nickname": "jsilva"
    },
    {
        "nome": "Maria Oliveira",
        "idade": 25,
        "email": "maria.oliveira@example.com",
        "jogos": [
            {"jogo": "Red Dead Redemption 2", "percentualHoras": 0.5}, 
            {"jogo": "The Witcher 3: Wild Hunt", "percentualHoras": 0.5}
        ],
        "acessoAntecipado": false,
        "nickname": "mariaoliveira"
    },
    {
        "nome": "Carlos Souza",
        "idade": 35,
        "email": "carlos.souza@example.com",
        "jogos": [
            {"jogo": "Half-Life 2", "percentualHoras": 0.4}, 
            {"jogo": "Portal 2", "percentualHoras": 0.3}, 
            {"jogo": "The Elder Scrolls V: Skyrim", "percentualHoras": 0.3}
        ],
        "acessoAntecipado": true,
        "nickname": "csouza"
    },
    {
        "nome": "John Doe",
        "idade": 28,
        "email": "johndoe@example.com",
        "jogos": [
            {"jogo": "The Last of Us", "percentualHoras": 0.5}, 
            {"jogo": "The Last of Us Part II", "percentualHoras": 0.5}
        ],
        "acessoAntecipado": false,
        "nickname": "johndoe"
    },
    {
        "nome": "Jane Doe",
        "idade": 26,
        "email": "janedoe@example.com",
        "jogos": [
            {"jogo": "The Last of Us", "percentualHoras": 0.5}, 
            {"jogo": "The Last of Us Part II", "percentualHoras": 0.5}
        ],
        "acessoAntecipado": true,
        "nickname": "janedoe"
    },
    {
        "nome": "Gabriel Ribeiro",
        "idade": 22,
        "email": "gamer123@example.com",
        "jogos": [
            {"jogo": "Grand Theft Auto V", "percentualHoras": 0.6}, 
            {"jogo": "Grand Theft Auto IV", "percentualHoras": 0.4}
        ],
        "acessoAntecipado": false,
        "nickname": "gamer123"
    },
    {
        "nome": "Paula Lima",
        "idade": 24,
        "email": "player456@example.com",
        "jogos": [
            {"jogo": "Red Dead Redemption 2", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": true,
        "nickname": "player456"
    },
    {
        "nome": "Washington Luis",
        "idade": 29,
        "email": "witcherfan@example.com",
        "jogos": [
            {"jogo": "The Witcher 3: Wild Hunt", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "witcherfan"
    },
    {
        "nome": "Renato Livio",
        "idade": 27,
        "email": "rpglover@example.com",
        "jogos": [
            {"jogo": "The Witcher 3: Wild Hunt", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": true,
        "nickname": "rpglover"
    },
    {
        "nome": "Paulo Fagundes",
        "idade": 23,
        "email": "portalplayer@example.com",
        "jogos": [
            {"jogo": "Portal 2", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "portalplayer"
    },
    {
        "nome": "Fernanda Souza",
        "idade": 32,
        "email": "halflifefan@example.com",
        "jogos": [
            {"jogo": "Half-Life 2", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": true,
        "nickname": "halflifefan"
    },
    {
        "nome": "Cassie Silva",
        "idade": 31,
        "email": "tesfan@example.com",
        "jogos": [
            {"jogo": "The Elder Scrolls V: Skyrim", "percentualHoras": 0.8}
        ],
        "acessoAntecipado": false,
        "nickname": "tesfan"
    },
    {
        "nome": "Oliver Rivera",
        "idade": 33,
        "email": "morrowindlover@example.com",
        "jogos": [
            {"jogo": "The Elder Scrolls III: Morrowind", "percentualHoras": 0.9}
        ],
        "acessoAntecipado": true,
        "nickname": "morrowindlover"
    },
    {
        "nome": "Antonio Nimo",
        "idade": 28,
        "email": "antoniomo@example.com",
        "jogos": [
            {"jogo": "Sonic", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "ant_nimo"
    },
    {
        "nome": "Zilda Arns",
        "idade": 29,
        "email": "zildarns@example.com",
        "jogos": [
            {"jogo": "The Legend of Zelda: Breath of the Wild", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "zeldafan"
    },
    {
        "nome": "Mario Santos",
        "idade": 25,
        "email": "mariosantos@gmail.com",
        "jogos": [
            {"jogo": "Super Mario Odyssey", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "mariolover"
    },
    {
        "nome": "Gabriel Ferreira",
        "idade": 28,
        "email": "gferreira@example.com",
        "jogos": [
            {"jogo": "God of War", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "gowfan"
    },
    {
        "nome": "Cybele Silva",
        "idade": 27,
        "email": "cybelsil@example.com",
        "jogos": [
            {"jogo": "Cyberpunk 2077", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "cyberfan"
    },
    {
        "nome": "Bernardo Barbosa",
        "idade": 21,
        "email": "babrbs@example.com",
        "jogos": [
            {"jogo": "Minecraft", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "blockbuilder"
    },
    {
        "nome": "Carlos Miranda",
        "idade": 22,
        "email": "crewmate@example.com",
        "jogos": [
            {"jogo": "Among Us", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "crewmate"
    }
]);


//update com $push
db.usuarios.updateOne(
    { "nickname": "jsilva" },
    { 
        $push: { 
            "jogos": { 
                "jogo": "Sonic", 
                "percentualHoras": 0.2 
            } 
        } 
    }
);

// Jogos




db.jogosVideoGame.insertMany([
     {
        "titulo": "The Last of Us",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2013,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.7},
            {"site": "IGN", "avaliacao": 10}
        ],
        "quantidadeHoras": 170,
        "preco": 59.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "The Last of Us Part II",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2020,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.3}
        ],
        "quantidadeHoras": 40,
        "preco": 69.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Grand Theft Auto V",
        "genero": "Ação",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2013,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 10},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeHoras": 110,
        "preco": 29.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Grand Theft Auto IV",
        "genero": "Ação",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2008,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.0},
            {"site": "IGN", "avaliacao": 9.2},
            {"site": "GameSpot", "avaliacao": 9.4}
        ],
        "quantidadeHoras": 25,
        "preco": 19.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Red Dead Redemption 2",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2018,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.8},
            {"site": "IGN", "avaliacao": 10},
            {"site": "GameSpot", "avaliacao": 9.7}
        ],
        "quantidadeHoras": 430,
        "preco": 59.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "The Witcher 3: Wild Hunt",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Polonês", "Francês"],
        "anoLancamento": 2015,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.3},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeHoras": 3000,
        "preco": 39.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Half-Life 2",
        "genero": "FPS",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2004,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.6},
            {"site": "IGN", "avaliacao": 9.8}
        ],
        "quantidadeHoras": 120,
        "preco": 9.99,
        "classificacaoIndicativa": "16+"
    },
    {
        "titulo": "Portal 2",
        "genero": "Puzzle",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.4},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeHoras": 40,
        "preco": 19.99,
        "classificacaoIndicativa": "10+"
    },
    {
        "titulo": "The Elder Scrolls V: Skyrim",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.3},
            {"site": "IGN", "avaliacao": 9.1},
            {"site": "GameSpot", "avaliacao": 9.2}
        ],
        "quantidadeHoras": 600,
        "preco": 29.99,
        "classificacaoIndicativa": "16+"
    },
    {
        "titulo": "The Elder Scrolls III: Morrowind",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português"],
        "anoLancamento": 2002,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.1},
            {"site": "IGN", "avaliacao": 8.9}
        ],
        "quantidadeHoras": 400,
        "preco": 9.99,
        "classificacaoIndicativa": "16+"
    },
    {
        "titulo": "The Elder Scrolls IV: Oblivion",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês"],
        "anoLancamento": 2006,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.2},
            {"site": "IGN", "avaliacao": 9.0},
            {"site": "GameSpot", "avaliacao": 8.8}
        ],
        "quantidadeHoras": 102,
        "preco": 14.99,
        "classificacaoIndicativa": "16+"
    },
    {
        "titulo": "The Elder Scrolls II: Daggerfall",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês"],
        "anoLancamento": 1996,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 8.5},
            {"site": "IGN", "avaliacao": 8.7}
        ],
        "quantidadeHoras": 75,
        "preco": 4.99,
        "classificacaoIndicativa": "14+"
    },
    {
        "titulo": "The Elder Scrolls",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês"],
        "anoLancamento": 1994,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 7.8},
            {"site": "IGN", "avaliacao": 7.5}
        ],
        "quantidadeHoras": 30,
        "preco": 2.99,
        "classificacaoIndicativa": "14+"
    },
    {
        "titulo": "The Legend of Zelda: Breath of the Wild",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Japonês"],
        "anoLancamento": 2017,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.7},
            {"site": "IGN", "avaliacao": 10}
        ],
        "quantidadeHoras": 200,
        "preco": 59.99,
        "classificacaoIndicativa": "10+"
    },
    {
        "titulo": "God of War",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2018,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.6},
            {"site": "IGN", "avaliacao": 10}
        ],
        "quantidadeHoras": 60,
        "preco": 39.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Cyberpunk 2077",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2020,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 5},
            {"site": "IGN", "avaliacao": 7.0}
        ],
        "quantidadeHoras": 150,
        "preco": 49.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Super Mario Odyssey",
        "genero": "Plataforma",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão", "Japonês"],
        "anoLancamento": 2017,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.6},
            {"site": "IGN", "avaliacao": 10}
        ],
        "quantidadeHoras": 50,
        "preco": 59.99,
        "classificacaoIndicativa": "L"
    },
    {
        "titulo": "Minecraft",
        "genero": "Sandbox",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.3},
            {"site": "IGN", "avaliacao": 9.0}
        ],
        "quantidadeHoras": 9999,
        "preco": 26.95,
        "classificacaoIndicativa": "L"
    },
    {
        "titulo": "Among Us",
        "genero": "Multijogador",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2018,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 8.0},
            {"site": "IGN", "avaliacao": 8.5}
        ],
        "quantidadeHoras": 100,
        "preco": 4.99,
        "classificacaoIndicativa": "10+"
    }
]);



db.jogosVideoGame.save({
    "_id": ObjectId("6669d860e4b7044b12c9eb5e"),
    "titulo": "Sonic",
    "genero": "Plataforma",
    "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
    "anoLancamento": 1991,
    "criticas": [
        {"site": "Metacritic", "avaliacao": 8.8},
        {"site": "IGN", "avaliacao": 8.5}
    ],
    "quantidadeHoras": 20,
    "preco": 14.99,
    "classificacaoIndicativa": "L"
});


db.jogosVideoGame.updateOne(
    { titulo: "The Witcher 3: Wild Hunt" },
    { $set: { quantidadeHoras: 200 } }
);

//empresas

db.empresasProdutorasDeGames.insertOne({
    "nome": "Naughty Dog",
    "paisOrigem": "EUA",
    "fundacao": 1984,
    "jogosDesenvolvidos": [
        "The Last of Us",
        "The Last of Us Part II"
    ],
    "comentarios": [
        {
            "usuario": "johndoe",
            "comentario": "Excelente empresa com jogos emocionantes!",
            "indicacao": 10
        },
        {
            "usuario": "janedoe",
            "comentario": "Os gráficos dos jogos são incríveis.",
            "indicacao": 9
        }
    ]
});

db.empresasProdutorasDeGames.insertMany([
    {
        "nome": "Rockstar Games",
        "paisOrigem": "EUA",
        "fundacao": 1998,
        "jogosDesenvolvidos": [
            "Grand Theft Auto V",
            "Grand Theft Auto IV",
            "Red Dead Redemption 2"
        ],
        "comentarios": [
            {
                "usuario": "gamer123",
                "comentario": "Adoro a série GTA!",
                "indicacao": 10
            },
            {
                "usuario": "player456",
                "comentario": "RDR2 é um dos melhores jogos que já joguei.",
                "indicacao": 9
            }
        ]
    },
    {
        "nome": "SEGA",
        "paisOrigem": "Japão",
        "fundacao": 1988,
        "jogosDesenvolvidos": [
            "Sonic"
        ],
        "comentarios": [
            {
                "usuario": "jsilva",
                "comentario": "Nostalgia Pura!",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "CD Projekt Red",
        "paisOrigem": "Polônia",
        "fundacao": 2002,
        "jogosDesenvolvidos": [
            "The Witcher 3: Wild Hunt",
            "Cyberpunk 2077"
        ],
        "comentarios": [
            {
                "usuario": "witcherfan",
                "comentario": "The Witcher 3 tem uma história incrível.",
                "indicacao": 10
            },
            {
                "usuario": "rpglover",
                "comentario": "Melhor RPG de todos os tempos.",
                "indicacao": 10
            },
            {
                "usuario": "cyberfan",
                "comentario": "Cyberpunk 2077 é um jogo razoavel, apesar dos bugs.",
                "indicacao": 8
            }
        ]
    },
    {
        "nome": "Valve Corporation",
        "paisOrigem": "EUA",
        "fundacao": 1996,
        "jogosDesenvolvidos": [
            "Half-Life 2",
            "Portal 2"
        ],
        "comentarios": [
            {
                "usuario": "portalplayer",
                "comentario": "Portal 2 é genial!",
                "indicacao": 10
            },
            {
                "usuario": "halflifefan",
                "comentario": "Ainda espero pelo Half-Life 3.",
                "indicacao": 8
            }
        ]
    },
    {
        "nome": "Bethesda",
        "paisOrigem": "EUA",
        "fundacao": 1986,
        "jogosDesenvolvidos": [
            "The Elder Scrolls V: Skyrim",
            "The Elder Scrolls IV: Oblivion",
            "The Elder Scrolls III: Morrowind"
        ],
        "comentarios": [
            {
                "usuario": "tesfan",
                "comentario": "Skyrim é um jogo que sempre volto a jogar.",
                "indicacao": 10
            },
            {
                "usuario": "morrowindlover",
                "comentario": "Morrowind tem uma nostalgia especial.",
                "indicacao": 9
            }
        ]
    },
    {
        "nome": "Nintendo",
        "paisOrigem": "Japão",
        "fundacao": 1889,
        "jogosDesenvolvidos": [
            "The Legend of Zelda: Breath of the Wild",
            "Super Mario Odyssey"
        ],
        "comentarios": [
            {
                "usuario": "zeldafan",
                "comentario": "Breath of the Wild redefine o gênero de aventura.",
                "indicacao": 10
            },
            {
                "usuario": "mariolover",
                "comentario": "Super Mario Odyssey é pura diversão.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Santa Monica Studio",
        "paisOrigem": "EUA",
        "fundacao": 1999,
        "jogosDesenvolvidos": [
            "God of War"
        ],
        "comentarios": [
            {
                "usuario": "gowfan",
                "comentario": "God of War é uma obra-prima.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Mojang Studios",
        "paisOrigem": "Suécia",
        "fundacao": 2009,
        "jogosDesenvolvidos": [
            "Minecraft"
        ],
        "comentarios": [
            {
                "usuario": "blockbuilder",
                "comentario": "Minecraft é um jogo infinito.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Innersloth",
        "paisOrigem": "EUA",
        "fundacao": 2015,
        "jogosDesenvolvidos": [
            "Among Us"
        ],
        "comentarios": [
            {
                "usuario": "crewmate",
                "comentario": "Among Us é muito divertido com amigos.",
                "indicacao": 9
            }
        ]
    }
]);

//mais dois jogos de elder scrolls

db.empresasProdutorasDeGames.updateOne(
    { nome: "Bethesda" },
    { $addToSet: { jogosDesenvolvidos: { $each: ["The Elder Scrolls II: Daggerfall", "The Elder Scrolls"] } } }
);
    
// lookup para juncao de jogos e empresas

db.empresasProdutorasDeGames.aggregate([{
  $lookup: {
    from: "jogosVideoGame",
    localField: "jogosDesenvolvidos",
    foreignField: "titulo",
    as: "jogosDesenvolvidos"
  }
},{ $out: "desenvolvedorasJogos" }]);

//renomeando colecao

db.desenvolvedorasJogos.renameCollection("desenvolvedorasJogosPerfis");

//drop de colecoes inuteis

db.jogosVideoGame.drop();
db.empresasProdutorasDeGames.drop();
