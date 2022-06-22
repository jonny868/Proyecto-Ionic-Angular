const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()





//---------Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


//-------------Routes
app.get('/', (req, res) => res.send('Hello World!'))



//------------Settings
app.set('port', process.env.PORT || 3000)

module.exports = app