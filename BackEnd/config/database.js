const mongoose = require('mongoose')

const DB_URL = "mongodb+srv://jonny868:preguntados1234@projects.dgpyu.mongodb.net/preguntados"

mongoose.connect(DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('DB IS CONNECTED'))
.catch(err => console.error(err))