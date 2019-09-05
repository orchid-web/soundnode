const express = require('express');

const app = express();

//lecture du fichier sous forme de caractère
const fs = require("fs");

const bodyparser = require('body-parser');

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
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
    //Accept GET POST OPTIONS Verbs
    res.header("Access-control-Allow-methods", "GET,POST,OPTIONS");
    next();
})
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//     next();
// });

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

// app.get('/likes', function (req, res) {
//     const id = req.body;
//     let t = likes.filter(x=>x.userId==id);
//     if(t){ for each elements of tracks if tracks.idTracks = likes.idtracks
        
//     }  

<<<<<<< HEAD
app.post('/likesplus', (req,res)=>{
    let exResponse = true;
    let data = req.body;
    
        const t=tracks.find(x => x.idTrack==data.id)
        let i = tracks.indexOf(t)
        if (t){
            newNbLikes = t.nbLikes
            newNbLikes ++ 
            tracks[i].nbLikes = newNbLikes
            console.log (tracks[i].nbLikes)
            fs.writeFileSync('public/tracks.json', JSON.stringify(tracks));
            res.json(exResponse)
            
        }   else {
            res.json(!exResponse)
        }
 })
=======
//     let exResponse = 'server Works!';
//     res.json(exResponse);
// })
>>>>>>> 88ded401d3c23b682109c46431ef90c578aedfba

//pour ajouter un like au tableau likes.json
app.post('/likes', function (req, res) {
    const dataLike = req.body;
    result = {};
    result.error = false;
   
    likes.push({ 
       userId: dataLike.userId,
       idTrack: dataLike.idTrack
    })
        fs.writeFileSync('public/likes.json', JSON.stringify(likes));
     //res.json(dataLike.userId);   
    
})

/*
    /signIn
    req => {email, password}
    res => {allowd : true|false, token,id}
*/
app.post('/signIn', (req, res) => {
    const data = req.body;
    result = {};
    result.allowd = false;
    const u = users.find(x => x.email == data.email && x.password == data.password);

    if (u) {
        result.allowd = true;
        u.token = (Math.random() * 10 + Math.random() * 10).toString(26);
        result.token = u.token;
        result.email = u.email;
        result.id = u.id;
        fs.writeFileSync('public/users.json', JSON.stringify(users));
    }
    res.json(result);
})
/*
    /isLogged
    req => {token}
    res => {allowd : true|false}
*/
app.post('/isLogged', (req, res) => {
    const data = req.body;
    result = { allowd: false };
    const u = users.find(x => x.token == data.token && x.token != '');
    if (u) {
        result.allowd = true;
    }
    res.json(result);

})
/*
    /login
    req => {nom, prenom}
    res => {error : true|false}
*/
app.post('/login', (req, res) => {
    const data = req.body;
    result = {};
    result.error = false;
    if (data.email == undefined || data.password == undefined) {
        result.error = true;
    }
    if (!result.error) {
        users.push({
            id: users.length++,
            email: data.email,
            password: data.password,
            age: data.age,
            token: ''
        })
        fs.writeFileSync('public/users.json', JSON.stringify(users));
    }
    res.json(result);
})
/*
    /logOut
    req => {token}
    res => {logOut : true|false}
*/
app.post('/logOut', (req, res) => {
    const data = req.body;
    const result = { logOut: false };
    const u = users.find(x => x.token == data.token);
    if (u) {
        u.token = '';
        fs.writeFileSync('public/users.json', JSON.stringify(users));
        result.logOut = true;
    }
    res.json(result);
})

app.listen(8083);
