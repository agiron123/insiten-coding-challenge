const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const addressSchema = new Schema({
  streetLine1: String,
  streetLine2: String,
  city: String,
  state: String,
  zip: Number,
  country: String
});

module.exports = addressSchema;