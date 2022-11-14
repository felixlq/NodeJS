//Sem usar bibliotecas, crie um projeto simples em Node.js que seja capaz de responder requisições HTTP.
//Explique como rodar e testar.
//
//PARA RODAR O ARQUIVO CERTIFIQUE-SE DE ESTAR NO LOCAL DO ARQUIVO EM SEU TERMINAL E DIGITE:
//NODE SERVIDOR.JS
//Siga as instruções no terminal para promover o teste.


const http = require('http')
const server = http.createServer((requisicao, resposta) => {
    if (requisicao.url == '/') {
        resposta.end('<h1> Home </h1>')

    } else if (requisicao.url == '/pagina2') {
        resposta.end('<h1> Server test Pagina 2 </h1>')

    } else if (requisicao.url == '/pagina3') {
        resposta.end('<h1> Server test Pagina 3 </h1>')

    } else {
        resposta.end('<h1> URL nao definida </h1>')
    }

})
server.listen(3000, 'localhost', () => {
    console.log('Servidor ATIVO\nPara testá-lo em seu Navegador digite:\nlocalhost:3000\nlocalhost:3000/pagina2\nlocalhost:3000/pagina3')
    console.log('Desligue o servidor com Ctrl + C');
})
