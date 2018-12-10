const mongoose = require ('mongoose');
const conn = mongoose.connect('mongodb://localhost:27017/cam', { useNewUrlParser: true });
const express = require ("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const api = require('./api');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(api);

// Listening
app.listen(process.env.port || 4001, function(){
  console.log("listening");
});

mongoose.connection.on('open', function(){
  console.log('connected');
}).on('error', function(error){
  console.log('error in connection');
});


module.exports = conn;
