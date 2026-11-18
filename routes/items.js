let express = require('express');
let router = express.Router();
let Item = require('../models/items');

let mongoose = require('mongoose');

// List all lost items using list.ejs when in /items
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

//create lost item logs
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

        res.redirect('/home');
    } catch (err) {
        console.log(err);
    }
});
// deletes item if delete is clicked
router.get('/delete/:id', async(req,res,next)=>{
    try{
        let id= req.params.id;
        Item.deleteOne({_id:id}).then(()=>{
            res.redirect('/items')
        })
    }
    catch(err){
        console.error(err);
        res.render('/items', {
            title: 'Items',
            Itemlist: [],
            error: 'Error on server'
        })
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        res.render('edit', {
            title: 'Edit Lost Item',
            item: item
        });
    }
    catch(err){
        console.log(err);
    }
});


router.post('/edit/:id', async (req, res) => {
    try {

        await Item.findByIdAndUpdate(req.params.id, {
            reportedBy: req.body.reportedBy,
            itemName: req.body.itemName,
            description: req.body.description,
            lastSeen: req.body.lastSeen,
            date: req.body.date,
            contact: req.body.contact
        });

        res.redirect('/items');
    }
    catch(err){
        console.log(err);
    }
});
module.exports = router;

      
