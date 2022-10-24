const express = require('express');
const path = require('path')





//Albedo things
const albedo = require('./data/albedo/required')



//Aloy things
const aloy = require('./data/aloy/required')


//amber things
const amber_build = require('../views/data/amber/builds/1.json')
const amber_intro = require('../views/data/amber/introduction.json')
const amber_asc = require('../views/data/amber/ascension.json')
const amber_cons = require('../views/data/amber/constellations.json')
const amber_p = require('../views/data/amber/passive.json')
const amber_ps = require('../views/data/amber/playstyle.json')
const amber_sk = require('../views/data/amber/skill.json')
const amber_syn = require('../views/data/amber/synergies.json')

module.exports= {albedo,aloy,
    amber_asc,amber_build,amber_cons,amber_intro,amber_p,amber_ps,amber_sk,amber_syn
}
// module.exports= {}