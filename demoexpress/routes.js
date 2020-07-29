const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    // res.send('Hola Pompas clásico')
    res.render('index',{saludo2:'Te quiero'})
})

router.get('/login', (req,res)=>{
    res.render('login')
})

module.exports = router