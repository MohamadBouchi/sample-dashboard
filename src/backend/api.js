require ('./connection');
const offene_posten_model = require('./Models/offene_posten');
const badge_lists_model = require('./Models/badge_lists');
const express = require ("express");
const cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
const app = express();
app.use(cors(corsOptions));



// Routing
app.get('/offene_posten', function(req, res){
  offene_posten_model.find().then(function(result){
  // offene_posten_model.find({'land':1}).limit(12).then(function(result){
    res.json(result);
  });
});

// badge-lists

// badge_list = id
app.get('/badge_list/', function(req, res){
  badge_lists_model.find({'id':req.query.id}).then(function(result){
    res.json(result);
  });
});

// badge_list in array
app.get('/badge_list_in_array/', function(req, res){
  badge_lists_model.find({'id':{$in:req.query.id}}).then(function(result){
    res.json(result);
  });
});
// all badge_lists
app.get('/badge_lists/', function(req, res){
  badge_lists_model.find().then(function(result){
    res.json(result);
  });
});

// Listening
app.listen(process.env.port || 4001, function(){
  console.log("listening");
});
