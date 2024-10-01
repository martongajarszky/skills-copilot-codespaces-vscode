// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const comments = [];

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    const pathName = parseUrl.pathname;
    const query = querystring.parse(parseUrl.query);
    if (pathName === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Not Found');
                return;
            }
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);
        });
    }});