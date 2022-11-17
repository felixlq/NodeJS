/*
Crie um código Node.JS usando a biblioteca Express. 
Nele, você deve receber quatro tipos de requisições e responder cada uma com strings diferentes. 
Por fim, explique como rodar o código.
*/

/*
INSTRUÇÕES:

Para simular o ambiente client e rodar o código siga os seguintes passos:
baixe e instale o insomnia em: https://insomnia.rest/download

utilize a imagem em: insomnia_projeto.jpg
Em um novo projeto: 

    1) crie um ambiente;
    2) crie as HTTP REQUEST;
    3) selecione o método para cada HTTP REQUEST;
    4) indique o endereço e porta de cada rota a ser chamada;
    5) pressione [Send] para chamar a rota escolhida;
    6) resposta dada por cada método;

    OBS o servidor (server_get_post_del.js) precisa estar rodando.
    para rodar o servidor ==> npx nodemon server_get_post_del.js
*/

const express = require('Express')
const app = express()
const port = 3000

//tabela de cores.
red = '\u001b[31m';
green = '\u001b[32m';
reset = '\u001b[0m';


app.get('/', (req, res) => {
    res.send("Bem vindo")
})

app.get('/projetos', (req, res) => {
    res.send ("Recebida uma requisicao HTTP GET.")
})


app.post('/projetos', (req, res) => {
    res.send('Recebida uma requisicao HTTP POST')
})


app.put('/projetos', (req, res) => {
    res.send('Recebida uma requisicao HTTP PUT')
})


app.delete('/projetos', (req, res) => {
    res.send('Recebida uma requisicao HTTP DELETE')
})


app.listen(port, () => {
    console.log(green + `Servidor ATIVO em: localhost:${port}` + reset)
    console.log(red + 'Desligue o servidor com Ctrl + C' + reset)
})
