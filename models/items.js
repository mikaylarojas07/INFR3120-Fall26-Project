const {default: mongoose, Collection} = require("mongoose");

let itemModel = mongoose.Schema({
  reportedBy: String, 
  itemName: String, 
  description: String, 
  lastSeen: String, 
  date: Date, 
  contact: String
},
{
  collection: "items"
});

  module.exports = mongoose.model('Item', itemModel);
  
