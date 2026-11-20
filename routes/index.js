//loads express 
var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
// Shows index.ejs
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
// Makes the routes available to the app
module.exports = router;
