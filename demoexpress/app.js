const express = require('express')
const app = express()
const routes = require('./routes')
const api = require('./api')

// ejs
app.set('view engine', 'ejs')

// routes
app.use(routes)
app.use('/api', api)

app.listen(3000, ()=>{
    console.log('3000')
})