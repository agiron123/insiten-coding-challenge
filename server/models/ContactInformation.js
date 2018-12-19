const mongoose = require("mongoose");
const CompanyInformation = require("./CompanyInformation");
const Address = require("./Address");

let Schema = mongoose.Schema;

const contactInformationSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  secondaryPhone: String,
  emailAddress: String,
  secondaryEmailAddress: String,
  company: CompanyInformation,
  website: String,
  homeAddress: Address,
  workAddress: Address,
  birthday: Date
});

module.exports = contactInformationSchema;
