const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })


//Paleta de cores para usar no terminal.
red = '\u001b[31m'
blue = '\u001b[34m'
yellow = '\u001b[33m'
green = '\u001b[32m'
reset = '\u001b[0m'

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

server.get('/teste_get', (req, res) => {
    res.end("Pesquisando: " + req.query.nome + "; Idade: " + req.query.idade)
})

server.post('/teste_post', urlEncodedParser, (req, res) => {
    res.end("Armazenando dados: " + req.body.nome + "; Idade: " + req.body.idade)
})

server.listen(8080, 'localhost', () => {
    console.log(green + 'Servidor ATIVO em: localhost:8080' + reset)
    console.log(red + 'Desligue o servidor com Ctrl + C' + reset)
})