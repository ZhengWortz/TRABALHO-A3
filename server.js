const express = require('express');
const app = express();
const port = 3000

function criarUsuario(body) {
    return {nome: 'usuario test', id: 1}
}
app.post('/users', (req, res) => {
    //logica para cirar usuario
    const usuario = criarUsuario(req.body);
    
    res.json(usuario);
});

app.listen(port, () => {
    console.log(`Servidor Rodando`);
});

