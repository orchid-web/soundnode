const express = require('express');

const app = express();

//lecture du fichier sous forme de caractère
const fs = require("fs");

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

const users =JSON.parse(fs.readFileSync('public/users.json','utf-8'));
const tracks=JSON.parse(fs.readFileSync('public/tracks.json','utf-8'));

//ajout du fichier likes.json dans public
const likes=JSON.parse(fs.readfileSync('public/likes.json','utf-8'));

//Pour que notre app web nodeJs accepte les datas en POST
app.use(bodyparser.urlencoded({extended : true}));

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

// app.post('/likes', function(req,res){
//     likeCount = 0;
//     let data = req.body;
//     let currentIdTrack = userLike.find(x=>x.idTrack ==data.idTrack);
//     if(currentIdTrack){ 
//         likes[]likeCount = ++;
//         likes.push({...data});
//         fs.writeFileSync('public/likes.json', JSON.stringify(users));
//     }
// })

app.listen(8083);

