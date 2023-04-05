// npm install express ou npm i express para instalar o pacote express, serve para criar um servidor pra criar requisição
// importando o pacote que acabamos de baixar
import express from "express"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"
import axios from "axios"

// criando a variável para criar o servidor 
const app = express()

// middlewares intercepta a requisição antes de chegar ao servidor
// vai fazer algo com a requisição
// npm i body-parser para instalar o body-parser

// middleware
app.use(bodyParser.json())

// Requisições GET e POST
// GET -> pegar informação
// POST -> inserir informação

// mime type do json -> Content-type: application/json, coloca isso no header
// app.nome do método '/' caminho da requisição, request é a requisição que o usuário ta pedindo e response é a resposta que o servidor vai dar
// query parameters -> ?, ? delimita o início
app.get('/', (request, response) => {
    const parametros = request.query // objeto com os parametros que estará no link {nome: nome que estará na url}
    // response.send("funcionando") send é para mandar e dentro do parenteses é o que aparecerá
    /*response.json({
        nome: "Pedro" // retorna tudo isso no insomnia, tudo que está dentro das {}
    }) // isso é um objeto */

    response.json({
        nome: parametros.nome
        // http://localhost:3000/?nome=Pedro -> retornará esse nome
    })
})

app.post('/dados', (req, res) => {
    console.log(req.body.nome)// acessar o nome no corpo da requisição
    const token = req.body.token
    jwt.verify(token, "aula", (erro, decodificado) => { // verificação pelo jwt, primeiro parâmetro é a variável token
        // segundo parâmetro é o segredo
        // terceiro parâmetro é o callback
        if (erro) {
            res.status(401).send()
        } else {
            res.json(decodificado) // json tem tudo, status, send e o resto
        }
    }) 
    // res.send() enviar uma resposta
}) // mudar no insomnia para post
// undefined objeto que não existe
// null propriedade que não existe

app.get('/discord', async (req, res) => {
    const URL_BASE = "https://discord.com/api"
    console.log(req.query) //.parâmetro para pegar um parâmetro específico
    
    const params = new URLSearchParams() // criando classe para parâmetros
    params.append("client_id", "12345") // colocar id da aplicação
    params.append("client_secret", "halamadrid") // colocar segredo
    params.append("grant_type", "authorization_code") // o que queremos receber, tipo de grant que queremos
    params.append("code", req.query.code) // usando o code que o discord enviou para nós
    params.append("redirect_uri", "http://localhost:3000/discord")
    const req1 = await axios.post(URL_BASE + "/oauth2/token", params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    // console.log(req1)
    console.log(req1.data)
    axios.get(URL_BASE + "/v10/users/@me", {
        headers: {
            "Authorization": "Bearer" + req1.data.access_token
        }
    }).then(r => {
        console.log(r.data)
    })
    res.send()
})

app.post('/banco', (req, res) => {
    
})
// token não dura pra sempre

// listen pq é a porta que quero "escutar" 3000 = porta
app.listen(3000, () => {
    console.log("servidor online")
})

// npm i jsonwebtoken para instalar a biblioteca jwt
// json web token tem 3 partes: header.body.signature
// header diz qual tipo de criptografia será usada
// body 
// signature vai juntar as duas partes header e body e junto uma palavra, uma chave, um segredo
// servidor verifica se o segredo/chave, se for verdade ele manda um resultado, se não manda outro
// jwt não foi feito pra esconder informações pois é público, mais usado para transporte de informações
// mas informações não sensíveis
// jwt.io
// no insomnia mostra o stts da sua requisição
// 2xx (200 até 299) sucesso
// 4xx erro do cliente -> esqueceu algum parâmetro ou esqueceu de algo quando for fazer a requisição
// 5xx erros do servidor
// http.cat/numero do status para saber o erro
// faz o teste para depois você enviar ao aplicativo quando estiver pronto
// preview do insomnia mostra o que será enviado ao usuário
// insomnia.rest programa que fazer 
// mdn da mozilla muito bom pra js
// mime types usado no cabeçalho da requisição, diz o tipo do que será retornado
// dicionário do programador canal yt que fala sobre json e afins
// json não pode usar aspas dupla
// autenticação, senha pra usar na API, exige credenciais de um usuário para usar um serviço
// oauth 2 dicionário do programador
// aplicação no discord para ver funcionando, OAuth 2 dps URL Generator
// https://discord.com/api/oauth2/authorize?client_id=1085514072398770176&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord&response_type=code&scope=identify%20guilds
// npm i axios para instalar o axios