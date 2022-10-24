const express = require('express');
const path = require('path')
const router = express.Router()
// const required = require('../views/require') 
// const albedo = require('../views/data/aloy/ascension.json')
const characters = require('../views/require')



const app = express();

app.set('view engine' , 'ejs');
// app.set('views', path.join(__dirname,'views'))
app.set('views', path.join(__dirname,'views'))



router.get('/albedo', (req,res) => {
    const { name } =  req.params;
    const  character  = characters.albedo
    
    // res.send(img);
    res.render('ejs/characters_ejs/albedo',{name,character})
})

router.get('/aloy', (req,res) => {
    const { name } =  req.params;
    const  character  = characters.aloy

    // res.send(img);
    res.render('ejs/characters_ejs/aloy',{name,character})
})



module.exports = router
