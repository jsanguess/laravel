// const os = require('os');
// console.log(os.release());
// const fs = require('fs');
// fs.writeFile('./texto.txt','hola pompas',function(err){
//     if (err){
//         console.log(err);
//     }
//     console.log('archivo creado');
// });
// fs.readFile('./texto.txt',function(err,data){
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// const http = require('http');
// const handleServer = function(req,res){
//     res.writneHead(200, {'contrent-type': 'texto/html'})
//     res.write('<h1>Hola Pompas</h1>')
//     res.end();
// }

// const server = http.createServer(handleServer)
// server.listen(3000, function(){
//     console.log('Server on port 3000');
// });
const express = require('express');
const colors = require('colors');
const server = express();
const morgan =require('morgan');
const path = require('path');
const ejsLint = require('ejs-lint');

// // agregando variable
server.set('appName', 'Mi primer servidor');
// motor plantillas html
const viewpath = (path.join(__dirname, './views'));
server.set('views', viewpath);
console.log(viewpath);
server.set('view engine', 'ejs');
ejsLint("index.ejs");

// middlewares
server.use(morgan('dev'));

// server.use((req,res,next)=>{
//     console.log('request url:' + req.url);
//     next();
// });


server.get('/', (req, res)=>{
    res.send('<h1>Hola Pompas</h1>');
    // res.render('index.ejs');
    res.end();
});
server.get('/login', function(req, res){
    res.render('index');
    // res.end();
});
server.listen(3000, ()=> {
    console.log('server on 3000'.red);
    console.log(server.get('appName'));
});










