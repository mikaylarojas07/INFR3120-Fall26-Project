let express = require('express');
let router = express.Router();
let Item = require('../models/items');

let mongoose = require('mongoose');

// List all lost items
router.get('/', async (req, res, next) => {
    try {
        const Itemlist = await Item.find();
        res.render('list', {
            title: 'Lost Items',
            Itemlist: Itemlist
        });
    } catch (err) {
        console.log(err);
    }
});

//create
router.get('/create', async(req, res, next)=>{
    try{
        res.render('create', {
            title: 'Report Lost Item'
        });
    }
    catch(err){
        console.error(err);
    }
})



// Create a new lost item
router.post('/create', async (req, res, next) => {
    try {
        await Item.create({
            reportedBy: req.body.reportedBy,
            itemName: req.body.itemName,
            description: req.body.description,
            lastSeen: req.body.lastSeen,
            date: req.body.date,
            contact: req.body.contact
        });

        res.redirect('/items');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

      
