const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const badge_lists_schema = new Schema({
  id : Number,
  badge_value1: Number,
  badge_value2: Number,
  badge_value3: Number,
  datum: Date
},{collection:'badge_lists'});

const badge_lists_model = mongoose.model('badge_lists', badge_lists_schema);

module.exports = badge_lists_model;
