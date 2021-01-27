var mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;
var ingredient = new mongoose.Schema({
  
   name: String,
   created: Date, 
   updated: Date, 
    

});

module.exports = mongoose.model("ingredient", ingredient);