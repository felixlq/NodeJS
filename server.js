//Crie um pequeno servidor web que contenha várias rotas.
//Em cada rota, você deverá fazer o controle do fluxo de requisições de maneira estática ou dinâmica, 
//alterne entre essas formas usando placeholders e query.

//cores para o alerta do servidor
red = '\u001b[31m';
green = '\u001b[32m';
reset = '\u001b[0m';

const express = require('Express')
const app = express()

app.get('/login', (req, res) => {           //http://localhost:3001/login
    res.send('Pagina home')                 //Pagina home
})

app.get('/users', (req, res) => {
    const nome = req.query.nome             //http://localhost:3001/users?nome=Fernando_Monte_Negro
    res.json({ nome: `${nome} ` })          //{"nome":"Fernando_Monte_Negro "}
})

app.get('/contato/:id', (req, res) => {
    const id = req.params.id                //http://localhost:3001/contato/55
    res.json({ id: `${id} ` })              //{"id":"55 "}
})

app.get('/Banco_de_dados', (req, res) => {   //http://localhost:3001/banco_de_dados
    res.sendStatus(404)                      //Not Found
})

app.get('/Loja', (req, res) => {             //http://localhost:3001/loja
    res.redirect ('/login')                  //Pagina home   
})


app.listen(3001, () => {
    console.log(green + 'Servidor ATIVO em: localhost:3001' + reset)
    console.log(red + 'Desligue o servidor com Ctrl + C' + reset)
})
