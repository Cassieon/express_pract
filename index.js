const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const music = require('./app');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/albums', (req, res) => {
    res.render('albums', {
        locals: {
            musicLib: music,
            path: req.path
        }
    });

app.get('/albums', (req, res) => {
    let htmlData = `<ul>`;
    for (let album of music) {
        htmlData += `<li>${album[0]}</li>`;
    }
    htmlData += `</ul>`;
    res.send(htmlData);
   
})
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});