const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
    //res.send('Hola Mundo!!');
    res.sendFile(path.join(__dirname, 'index.html')); //'/Users/dnux/Desktop/proyecto_node/index.html');
});

app.get('/admin', (req, res) => {
    res.send('Modulo Administrador !!')
});

app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto: ', app.get('port'))
});

