const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hola Pompas clásico')
})

app.listen(3000, ()=>{
    console.log('3000');
})