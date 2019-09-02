const express = require('express');

const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

const users =JSON.parse(fs.readFileSync('public/users.json','utf-8'));
const tracks=JSON.parse(fs.readFileSync('public/tracks.json','utf-8'));

app.use(function (req, res, next) {
    //Accept ALL origins
    res.header("Access-control-Allow-origin", "*");
    //Accept All headers
    res.header("Access-control-Allow-headers", "*");
    //Accept GET POST OPTIONS Verbs
    res.header("Access-control-Allow-methods", "GET,POST,OPTIONS");
    next();
})

app.use(bodyparser.json());

app.get('/', function (req, res) {
    let exResponse = 'server Works!';
    res.json(exResponse);
})

app.listen(8083);