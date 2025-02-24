console.log("hallo world");
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(express.urlencoded({extended: true}));

app.use('/static', express.static('static'));

app.get('/', onhome);
app.post('/add_name', add_name)
app.get('/AAAH', onAAAH);
app.get('/B', onB);



app.listen(8000);

function onhome(req, res) { 
    // let stuff = {
    //     naam: 'henk',
    //     kaas: 'ja'
    // }
    res.render('index.ejs');
}

function add_name(req, res) {
    
}

function onAAAH(req, res) {
    res.render('deel.ejs');
}

function onB(req, res) {
    res.send('<link rel="stylesheet" href="static/css/style.css"> <h1>B</h1>  <h2>C</h2>');
   
}