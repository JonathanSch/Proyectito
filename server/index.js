const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('../routes')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/' , (req,res) =>{
    res.status(200).send({message : "Todo bien"})
})

app.use('/api/v1' , router)
module.exports = {app,PORT}