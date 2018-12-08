const mongoose = require ('mongoose');

const conn = mongoose.connect('mongodb://localhost:27017/cam', { useNewUrlParser: true });

mongoose.connection.on('open', function(){
  console.log('connected');
}).on('error', function(error){
  console.log('error in connection');
});

module.exports = conn;
