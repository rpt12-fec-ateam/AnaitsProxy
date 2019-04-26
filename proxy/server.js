const express = require('express');
const httpProxy = require('http-proxy');
const url  =  require('url');
const proxy = httpProxy.createProxyServer();
const path = require('path');
const http = require('http');

const port = 7000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(__dirname + '/public'));
app.use('/item/:id', express.static(__dirname + '/public'));


app.get('/allReviews/item/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.get('/allItems/item/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.get('/items', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
})

app.get('/images', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
})

app.get('/benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
})

app.get('/item-benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
})

app.get('/ingredients',  (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:6001' });
});

app.get('/test', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8080' });
});

app.listen(port, () => console.log('Server is running'))