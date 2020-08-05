const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')

router.use('/rutas' , userRoutes)
router.get('/' , (req,res)=>{
    res.send('Todo cool').status(200)
})

module.exports = router