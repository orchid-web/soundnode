const express = require('express');

const app = express();

//lecture du fichier sous forme de caractère
const fs = require("fs");

const bodyparser = require('body-parser');

//Nombre aléatoire
const rand = function () {
    return Math.random().toString(36).substr(2);
};

const token = function () {
    return rand() + rand(); // to make it longer
};

app.use(bodyparser.urlencoded({ extended: true }));

const users = JSON.parse(fs.readFileSync('public/users.json', 'utf-8'));
const tracks = JSON.parse(fs.readFileSync('public/tracks.json', 'utf-8'));

//ajout du fichier likes.json dans public
const likes = JSON.parse(fs.readFileSync('public/likes.json', 'utf-8'));

//Pour que notre app web nodeJs accepte les datas en POST
app.use(bodyparser.urlencoded({ extended: true }));

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
app.get('/tracks', function (req, res) {
    let exResponse = tracks;
    //Response on json
    res.json(exResponse);
})

app.get('/likes', function (req, res) {
    let exResponse = 'server Works!';
    res.json(exResponse);
})

//pour ajouter un like au tableau likes.json
app.post('/likes', function (req, res) {
    const dataLike = req.body;
   console.log (dataLike)
    result = {};
    result.error = false;
   
    likes.push({ 
       dataLike
    })
        fs.writeFileSync('public/likes.json', JSON.stringify(likes));
     res.json(dataLike.userId);   
    
})

app.post('/isLogged', function (req, res) {
    let data = req.body;
    let user = userAccess.find(x => x.id == data.id && x.token == data.token);
    if (user) {
        res.json({ access: true });
    }
    else {
        res.json({ access: false });
    }
})

app.post('/signIn', function (req, res) {
    let data = req.body;
    let user = userAccess.find(x => x.login == data.login && x.password == data.password);
    if (user) {
        user.token = token();
        fs.writeFileSync('public/users.json', JSON.stringify(userAccess));
        res.json({ logged: true, token: user.token, userId: user.id })
    }
    else {
        res.json({ logged: false });
    }
})

app.listen(8083);
