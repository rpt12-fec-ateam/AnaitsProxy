const express = require('express');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const path = require('path');
const http = require('http');

const port = 7000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/allReviews/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.get('/allItems/item/:id', function(req, res) {
  console.log('req.params.id in /allItems', req.params.id);
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

app.get('/ingredients', function (req, res) {
  proxy.web(req, res, { target: 'http://localhost:6001' });
});

app.get('/test', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8080' });
});

app.listen(port, () => console.log('Server is running'))