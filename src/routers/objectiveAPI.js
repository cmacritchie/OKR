const express = require('express');
const Objective = require('../models/objective');
const router = new express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post('/objective', jsonParser,  async (req, res)=> {
    console.log('objective post');
    // console.log(req);
    console.log(req.body);
    const objective = new Objective({
        ...req.body
    })

    try{
        await objective.save()
        res.status(201).send(objective)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/hello', async (req, res)=> {
    
    res.status(201).send({greeting:"Hello"})
})

module.exports = router