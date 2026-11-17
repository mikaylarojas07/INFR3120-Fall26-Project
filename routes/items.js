const = mongoose = require("mongoose");

const itemSchema = new mongoose.Schema{(
  username: {
    type: String,
    //user must provide a value
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  },
  lastSeenLocation: {
    type: String,
    required: true
  },
  dataLost: {
    type: Data,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  });
}
  module.exports = mongoose.model('item', itemSchema);
  
