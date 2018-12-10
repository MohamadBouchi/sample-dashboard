const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const users_schema = new Schema({
  id : Number,
  first_name : String,
  last_name : String,
  username : String,
  email : String,
  password : String
},{collection:'users'});

const users_model = mongoose.model('users', users_schema);

module.exports = users_model;
