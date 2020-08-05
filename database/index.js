const mongoose = require('mongoose')
const URI = process.env.DB_URI

mongoose.connect(URI, (err)=>{
    err ? console.error(err) : console.info('Database connected')
})