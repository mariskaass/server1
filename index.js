console.log("hallo world");
const express = require('express');
const app = express();

app.get('/', onhome);
app.get('/AAAH', onAAAH);

app.listen(8000);

function onhome(req, res) {
    res.send('<h1>kaas</h1>');
}

function onAAAH(req, res) {
    res.send('<h1>AAAAAAAAAAAAHHHHHH</h1>')
}