  
const express    = require("express"),
router     = express.Router(),
middleware = require("../middleware"),
Ingredients = require("../models/ingredients"); 


router.get('/api/:searchtxt', function(req, res){

console.log('req.params.searchtxt:' + req.params.searchtxt)
var searchStr = '/'+ req.params.searchtxt + '/'; 
    Ingredients.find( {"name": {'$regex':req.params.searchtxt, $options:'i' }},{name:1, _id:0} ,  function(err, allIngredients){
        if(err){
            console.log(err);
            res.send("Error: " +  err); 
        } else {
            
           res.send(allIngredients);
        }
     });

    

}); 

router.get('/', function(req, res){
    Ingredients.find( {},  function(err, allIngredients){
        if(err){
            console.log(err);
            res.send("Error: " +  err); 
        } else {
          
           res.render("ingredients",{ingredients: allIngredients});
        }
     });

    

}); 


router.post('/', function(req, res){

    console.log(req.body.name); 
    Ingredients.create(req.body, function(err, insertedRec){
        if(err){
            console.log(err);
            res.send("Error Adding  " + req.body.name); 
        } else {
           
            res.send("Added Successfully " + insertedRec._id); 
        }   
   
    })
   
}); 

router.delete("/:id", function(req, res){
    Ingredients.findByIdAndRemove(req.params.id, function(err, deletedIngredient){
      if(err){
         res.send("error deleting the ingredient"); 
      }
      else{
        res.redirect("/ingredients"); 
    
      }
    })
    
    })

    router.post("/:id", function(req, res){
        Ingredients.findByIdAndUpdate(req.params.id, req.body, function(err, updatedIgredient){
            if(err){
               console.log("error", "Error updating the ingredient: " + err); 
                res.redirect("/ingredients");
            } else {
                //redirect somewhere(show page)
                res.redirect('/ingredients'); 
            }
         });
        
        })

module.exports = router; 