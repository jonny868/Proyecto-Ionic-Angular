const express = require('express')
const cors = require('cors')

const app = express()

require('./config/database')
app.use(cors());
app.use(express.json())
app.use('/api',require('./routes/auth.routes'))


app.listen(3000)
console.log('Server has started on port', 3000)