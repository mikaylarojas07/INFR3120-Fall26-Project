// lets the app know we are working with mongoose
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
// other files can access this file
  module.exports = mongoose.model('Item', itemModel);
  
