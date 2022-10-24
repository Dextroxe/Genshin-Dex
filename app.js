const express = require('express');
const app = express();
const path = require('path')
const { EnkaNetwork } = require("enkanetwork");
const CharInfo = require('./views/images/chracters_img.json')
const enka = new EnkaNetwork({ language: "EN", caching: true });



app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname,'views'))

port = 8080

// Allcharacter
app.get('/',  (req,res) => {
    res.render('ejs/home')
})

app.get('/genshin',  (req,res) => {
    const info = CharInfo
    res.render('ejs/show',{info})
    // res.send(info)
})

// app.get('/genshin/:name',(req,res)=> {
//     const { name } = req.params;
    
// <%=info.characters_map[i].icon%>

// })


const charAlbedo = require('./routes/albedo')

app.use('/genshin', charAlbedo)
app.use(express.static(__dirname + '/public'));


app.listen(port,()=>{
    console.log(`serving no port: ${port}`)
})
