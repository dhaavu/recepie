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
    name: String, 
    qty: Number, 
    measure: String
   }] 

});

module.exports = mongoose.model("recepie", recepie);