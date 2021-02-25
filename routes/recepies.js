const express    = require("express"),
router     = express.Router(),
middleware = require("../middleware"),
Recepies = require('../models/recepies'), 
Ingredients = require("../models/ingredients"); 

router.get('/new', function(req, res){
    res.render('recepieNew', {recepie: ''}); 
})

router.get('/', function(req, res){
    Recepies.find( {},  function(err, allRecepies){
        if(err){
            console.log(err);
            res.send("Error: " +  err); 
        } else {
          
           res.render("recepies",{recepies: allRecepies});
        }
     });

    

}); 

router.get('/:id/newIngredient', function(req, res){
    Recepies.findById( req.params.id,  function(err, recepie){
        if(err){
            console.log(err);
            res.send("Error: " +  err); 
        } else {
          
           res.render("newRecepieIngredient",{recepie: recepie});
        }
     });

    

}); 


router.get('/:id', function(req, res){
    Recepies.findById( req.params.id,  function(err, recepie){
        if(err){
            console.log(err);
            res.send("Error: " +  err); 
        } else {
          
           res.render("recepieDetails",{recepie: recepie});
        }
     });

    

}); 




router.post('/', function(req, res){

    console.log(req.body.name); 
    Recepies.create(req.body, function(err, insertedRec){
        if(err){
            console.log(err);
            res.send("Error Adding  " + req.body.name); 
        } else {
           
            res.redirect("/recepies/" + insertedRec._id); 
        }   
   
    })
   
}); 

router.delete("/:id", function(req, res){

    Recepies.findByIdAndRemove(req.params.id, function(err, deletedIngredient){
      if(err){
         res.send("error deleting the ingredient"); 
      }
      else{
        res.redirect("/recepies"); 
    
      }
    })
    
    })

    router.post("/:id", function(req, res){
        console.log(req.body);
        Recepies.findByIdAndUpdate(req.params.id, req.body, function(err, updatedIgredient){
            if(err){
               console.log("error", "Error updating the ingredient: " + err); 
                res.redirect("/recepies");
            } else {
                //redirect somewhere(show page)
                res.redirect('/recepies/' + updatedIgredient._id); 
            }
         });
        
        })


module.exports = router; 