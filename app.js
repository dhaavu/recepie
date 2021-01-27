var express = require('express'); 
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
//var Ingredient = require("./models/ingredients"); 
const Ingredients = require('./models/ingredients');
const ingredientRoutes = require('./routes/ingredients'); 
const Recepies = require('./models/recepies');
const recepieRoutes = require('./routes/recepies'); 

var app = express(); 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static('public')); 

mongoose.connect("mongodb+srv://dhaval:Welcome30@cluster0-71yob.mongodb.net/test?retryWrites=true&w=majority",  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },  function (err){
    if (err)
    console.log("error changed  connecting to database  ", err);
    else
    console.log("Database connected !!! ")

});



app.use("/ingredients", ingredientRoutes);

app.use("/recepies", recepieRoutes);

app.get('/', function(req, res){

    res.render("home");

})



app.listen(process.env.PORT || 3000, function (err){
    console.log('server started on port 3000');

})

