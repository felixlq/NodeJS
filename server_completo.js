/*
Faça um servidor web para responder requisições com diferentes status HTTP, os quais devem estar de acordo
com os parâmetros enviados pelo placeholder nas requisições. 
Exemplo: a rota “/listar/50” vai retornar o HTTP 404; a rota /listar/10 vai retornar o HTTP 200 com alguma
string.*/

//USE O INSOMNIA PARA TESTAR AS ROTAS


//CHAMADO DAS BIBLIOTECAS NECESSÁRIAS
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 8080

//ATIVAÇÃO DO BODY-PARSER PARA TRABALHAR COM JSON
app.use(bodyParser.json())

const biblioteca = [
    { título: '1º artigo' }
]

//ROTA HOME
app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor Teste').status(200)
    console.log('Pagina teste >> Home Biblioteca << - status (200)')
})

//MÉTODO POST PARA CRIAÇÃO DOS OBJETOS
app.post('/biblioteca/add', (req, res) => {
    let post = req.body
    let artigo = biblioteca.length + 1 +'º artigo'
    biblioteca.push(post)
    post.título = artigo
    res.status(201).send(post)
    console.log('Página teste >> Adcionar Artigo << ', req.body, 'adcionado - status (201)');
    //console.log(`Página teste >> Adcionar Artigo << - ${artigo} adcionado - status (201)`)
})

//MÉTODO GET PARA VISUALIZAÇÃO DOS OBJETOS (POR ID)
app.get('/biblioteca/ver/:id', (req, res) =>{
    let id = req.params.id
    if (id > 0 && id <= biblioteca.length){
        res.status(200).send(biblioteca[id-1])
        console.log('Página teste >> Ver Artigo << - status (200)');
    } else {
        res.status(404).send('Artigo não Encontrado')
    }
})

//MÉTODO GET PARA VISUALIZAÇAO DOS OBJETOS (GERAL)
app.get('/biblioteca/ver_todos', (req, res) => {
    res.status(200).send(biblioteca)
    console.log('Página teste >> Ver Biblioteca << - status (200)');
})

//MÉTODO PUT PARA EDIÇÃO DOS OBJETOS 
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

//MÉTODO DELETE PARA DELEÇÃO DOS OBJETOS
app.delete('/biblioteca/delete_artigo/:id', (req, res)=> {
    let id = req.params.id
    if (id > 0 && id <= biblioteca.length){
        arquivo_deletado = biblioteca[id-1]
        biblioteca.splice(id - 1, 1)
        res.status(200).send(`${id}º Artigo Removido`)
        console.log('Página teste >> Deletar Artigo << ', arquivo_deletado,'Removido - status (200)');
    } else {
        res.status (404).send ('Artigo não encontrado')
    }       

})

//MÉTODO ALL PARA SINALIZAÇÃO DE ERROS DE ROTA
app.all('*', (req, res) => {
    res.status(404).send('Página não encontrada.')
})

//CONFIGURAÇÃO DO SERVIDOR
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log('Para encerrar pressione Crtl + c');
})
