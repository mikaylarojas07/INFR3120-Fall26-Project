const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// List all lost items
router.get('/home', async (req, res) => {
    try {
        const items = await Item.find();
        res.render('list', {
            title: 'Lost Items Logs',
            items: items
        });
    } catch (err) {
        console.log(err);
    }
});

// Create a new lost item
router.post('/create', async (req, res) => {
    try {
        await Item.create({
            Reportedby: req.body.Reportedby,
            ItemName: req.body.ItemName,
            Description: req.body.Description,
            lastSeen: req.body.lastSeen,
            Date: req.body.Date,
            Contact: req.body.Contact
        });

        res.redirect('/items');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

      
