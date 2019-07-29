const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');

const app = new express();
 
app.use(express.static('public'));
app.use(expressEdge);
app.set('views', __dirname + '/views');
 
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/CV', (req, res) => {
    res.render('CV');
});

app.get('/experience', (req, res) => {
    res.render('experience');
});

app.get('/research', (req, res) => {
    res.render('research');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// app.get('/contact', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
// });

app.listen(3000, () => {
    console.log('App listening on port 3000')
});