const offene_posten_model = require('./Models/offene_posten');
const badge_lists_model = require('./Models/badge_lists');
const users_model = require('./Models/users');
const jwt = require('jsonwebtoken');
const express = require ("express");
const router = express();


//verifyToken
function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if(token === 'null'){
    return res.status(401).send('Unauthorized request');
  }
  let payload = jwt.verify(token, 'secretkey');
  if(!payload){
    return res.status(401).send('Unauthorized request');
  }
  req.userId = payload.subject;
  next();
}


// Routing
router.get('/offene_posten', function(req, res){
  offene_posten_model.find().then(function(result){
  // offene_posten_model.find({'land':1}).limit(12).then(function(result){
    res.json(result);
  });
});

// badge-lists

// badge_list = id
router.get('/badge_list/', verifyToken, function(req, res){
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
router.get('/badge_lists/', verifyToken, function(req, res){
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
          let payload = { subject: user._id };
          let token = jwt.sign(payload, 'secretkey');
          res.status(200).send({token});
        }
      }
    }
  });
});
module.exports = router;
