var mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;
const Ingredient = require('./ingredients'); 
const Schema = mongoose.Schema;

var recepie = new Schema({
  
   name: String,
   created: Date, 
   updated: Date, 
   type: [String], 
   procedure: String, 
   ingredients:[{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
   }] 

});

module.exports = mongoose.model("recepie", recepie);