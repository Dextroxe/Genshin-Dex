const express = require('express');
const path = require('path')
const router = express.Router()
// const required = require('../views/require') 
// const albedo = require('../views/data/aloy/ascension.json')
const characters = require('../views/require')
const info = require('../views/images/characters_img.json')


const app = express();

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname,'views'))
app.set('views', path.join(__dirname, 'views'))



router.get('/:name', (req, res) => {
    var { name } = req.params;
    // const char = name;
    if (name == "aloy") { var character = characters.aloy }
    else if (name == "albedo") { var character = characters.albedo }

    else if (name == "anemotraveler") { var character = characters.anemotraveler }

    else if (name == "amber") { var character = characters.amber }

    else if (name == "ayaka") { var character = characters.ayaka }

    else if (name == "ayato") { var character = characters.ayato }

    else if (name == "barbara") { var character = characters.barbara }

    else if (name == "beidou") { var character = characters.beidou }

    else if (name == "bennett") { var character = characters.bennett }

    else if (name == "candace") { var character = characters.candace }

    else if (name == "tartaglia") { var character = characters.childe }

    else if (name == "chongyun") { var character = characters.chongyun }

    else if (name == "collei") { var character = characters.collei }

    else if (name == "cyno") { var character = characters.cyno }

    else if (name == "dendrotraveler") { var character = characters.dendrotraveler }

    else if (name == "diluc") { var character = characters.diluc }

    else if (name == "diona") { var character = characters.diona }

    else if (name == "dori") { var character = characters.dori }

    else if (name == "electrotraveler") { var character = characters.electrotraveler }

    else if (name == "eula") { var character = characters.eula }

    else if (name == "fischl") { var character = characters.fischl }

    else if (name == "ganyu") { var character = characters.ganyu }

    else if (name == "geotraveler") { var character = characters.geotraveler }

    else if (name == "gorou") { var character = characters.gorou }

    else if (name == "heizou") { var character = characters.heizou }

    else if (name == "hutao") { var character = characters.hutao }

    else if (name == "itto") { var character = characters.itto }

    else if (name == "jean") { var character = characters.jean }

    else if (name == "kaeya") { var character = characters.kaeya }

    else if (name == "kazuha") { var character = characters.kazuha }


    else if (name == "keqing") { var character = characters.keqing }


    else if (name == "klee") { var character = characters.klee }


    else if (name == "kokomi") { var character = characters.kokomi }


    else if (name == "shinobu") { var character = characters.kuki }


    else if (name == "layla") { var character = characters.layla }


    else if (name == "lisa") { var character = characters.lisa }


    else if (name == "mona") { var character = characters.mona }


    else if (name == "nahida") { var character = characters.nahida }


    else if (name == "nilou") { var character = characters.nilou }


    else if (name == "ningguang") { var character = characters.ningguang }


    else if (name == "noelle") { var character = characters.noelle }


    else if (name == "qiqi") { var character = characters.qiqi }


    else if (name == "raiden") { var character = characters.raiden }


    else if (name == "razor") { var character = characters.razor }


    else if (name == "rosaria") { var character = characters.rosaria }

    else if (name == "sara") { var character = characters.sara }


    else if (name == "sayu") { var character = characters.sayu }


    else if (name == "shenhe") { var character = characters.shenhe }


    else if (name == "sucrose") { var character = characters.sucrose }


    else if (name == "thoma") { var character = characters.thoma }


    else if (name == "tighnari") { var character = characters.tighnari }


    else if (name == "venti") { var character = characters.venti }


    else if (name == "xangling") { var character = characters.xiangling }


    else if (name == "xiao") { var character = characters.xiao }


    else if (name == "xingqiu") { var character = characters.xingqiu }

    else if (name == "xinyan") { var character = characters.xinyan }


    else if (name == "yae_miko") { var character = characters.yaemiko }


    else if (name == "yanfei") { var character = characters.yanfei }


    else if (name == "yelan") { var character = characters.yelan }


    else if (name == "yoimiya") { var character = characters.yoimiya }

    else if (name == "yunjin") { var character = characters.yunjin }

    else if (name == "zhongli") { var character = characters.zhongli }
    
    else if (name == "aether-electro") { var character = characters.electrotraveler }

    else if (name == "aether-dendro") { var character = characters.dendrotraveler }

    else if (name == "aether-anemo") { var character = characters.anemotraveler }

    else if (name == "aether-geo") { var character = characters.geotraveler }




    res.render(`ejs/char_info`, { name, character,info })
})


module.exports = router
