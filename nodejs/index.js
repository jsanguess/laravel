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
//     res.writeHead(200, {'contrent-type': 'texto/html'})
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
server.get('/', function(req, res){
    res.send('<h1>Hola Pompas</h1>')
    res.end();
})
server.listen(3000, ()=> {
    console.log('server on 3000'.red);
});









