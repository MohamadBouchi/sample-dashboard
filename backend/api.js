const offene_posten_model = require('./Models/offene_posten');
const badge_lists_model = require('./Models/badge_lists');
const users_model = require('./Models/users');
const express = require ("express");
const router = express();

// Routing
router.get('/offene_posten', function(req, res){
  offene_posten_model.find().then(function(result){
  // offene_posten_model.find({'land':1}).limit(12).then(function(result){
    res.json(result);
  });
});

// badge-lists

// badge_list = id
router.get('/badge_list/', function(req, res){
  badge_lists_model.find({'id':req.query.id}).then(function(result){
    res.json(result);
  });
});

// badge_list in array
router.get('/badge_list_in_array/', function(req, res){
  badge_lists_model.find({'id':{$in:req.query.id}}).then(function(result){
    res.json(result);
  });
});
// all badge_lists
router.get('/badge_lists/', function(req, res){
  badge_lists_model.find().then(function(result){
    res.json(result);
  });
});

router.post('/register', (req, res)=>{
  let userData = req.body;
  let user = new users_model(userData);
  user.save((err, registerdUser)=>{
    if (err){
      console.log(err);
    }
    else{
      res.status(200).send(registerdUser);
    }
  });
});

router.post('/login',(req, res)=>{
  let userData = req.body;
  users_model.findOne({'username': userData.username}, (error, user) => {
    if(error){
      console.log(error);
    } else{
      if(!user){
        res.status(401).send('invalid user name');
      } else{
        if(user.password != userData.password){
          res.status(401).send("Incorrect password");
        } else{
          res.status(200).send(user);
        }
      }
    }
  });
});
module.exports = router;
