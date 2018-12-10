const offene_posten_model = require('./Models/offene_posten');
const badge_lists_model = require('./Models/badge_lists');
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



module.exports = router;
