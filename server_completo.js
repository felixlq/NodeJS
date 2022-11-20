/*
Faça um servidor web para responder requisições com diferentes status HTTP, os quais devem estar de acordo
com os parâmetros enviados pelo placeholder nas requisições. 
Exemplo: a rota “/listar/50” vai retornar o HTTP 404; a rota /listar/10 vai retornar o HTTP 200 com alguma
string.*/

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())


const biblioteca = [
    { título: '1º artigo' }
]

app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor Teste').status(200)
    console.log('Pagina teste >> Home Biblioteca << - status (200)')
})

app.post('/biblioteca/add', (req, res) => {
    let post = req.body
    let artigo = biblioteca.length + 1 +'º artigo'
    biblioteca.push(post)
    post.título = artigo
    res.status(201).send(post)
    console.log(req.body);
    console.log(`Página teste >> Adcionar Artigo << - ${artigo} adcionado - status (201)`)
})

app.get('/biblioteca/ver/:id', (req, res) =>{
    let id = req.params.id
    if (id > 0 && id <= biblioteca.length){
        res.status(200).send(biblioteca[id-1])
        console.log('Página teste >> Ver Artigo << - status (200)');
    } else {
        res.status(404).send('Artigo não Encontrado')
    }
})

app.get('/biblioteca/ver_todos', (req, res) => {
    res.status(200).send(biblioteca)
    console.log('Página teste >> Ver Biblioteca << - status (200)');
})

app.put('/biblioteca/edit_artigo/:id', (req, res)=>{
    let id = req.params.id
    if (id > 0 && id <= biblioteca.length){
        let post = req.body
        post = {título: 'Arquivo Editado'}
        biblioteca.splice(id-1,1,post)
        res.status(200).send(post)
        console.log('Página teste >> Editar Artigo << - status (200)');
    } else {
        res.status (404).send ('Artigo não encontrado')
    }   
})

app.delete('/biblioteca/delete_artigo/:id', (req, res)=> {
    let id = req.params.id
    if (id > 0 && id <= biblioteca.length){
        biblioteca.splice(id - 1, 1)
        res.status(200).send('Artigo removido')
        console.log('Página teste >> Deletar Artigo << - status (200)');
    } else {
        res.status (404).send ('Artigo não encontrado')
    }       

})

app.all('*', (req, res) => {
    res.status(404).send('Página não encontrada.')
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log('Para encerrar pressione Crtl + c');
})
