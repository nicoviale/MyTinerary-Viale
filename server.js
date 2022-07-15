require('dotenv').config()
require('./config/database')
const passport = require('passport')
const Router = require('./routes/routes')
const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api',Router)
app.get ('/', (req, res) => { res.send('SERVIDOR CREADO!') })

const PORT = 4000

app.set('port', PORT)


app.listen(PORT, () =>{
    console.log('SERVIDOR CORRIENDO EN PUERTO NUMERO: ' + app.get('port'))
})