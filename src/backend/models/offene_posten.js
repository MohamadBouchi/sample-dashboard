const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const offene_posten_schema = new Schema({
  id : Number,
  anz_op_gesamt : Number,
  anz_op : Number,
  Stuffe_1 : Number,
  Stuffe_2 : Number,
  Stuffe_3 : Number,
  Stuffe_4 : Number,
  Stuffe_5 : Number,
  Stuffe_6 : Number,
  Stuffe_7 : Number,
  Summe_op_gesamz: Number,
  Summe_op : Number,
  region : Number,
  kaufnl : Number,
  systemkd : Number,
  land : Number
},{collection:'offene_posten'});

const offene_posten_model = mongoose.model('offene_posten', offene_posten_schema);

module.exports = offene_posten_model;
