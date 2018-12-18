const mongoose = require("mongoose");
const ContactInformation = require("./ContactInformation");

let Schema = mongoose.Schema;

const PRIVATELY_HELD = "PRIVATELY_HELD";
const IPO = "IPO";

const companyInformationSchema = new Schema({
  companyName: String,
  headquarters: String, // location of the company - would be cool to show in a map view or something like that.
  dateFounded: Date,
  importantExecutives: [ContactInformation],
  fundingStatus: {
    type: String,
    enum: [PRIVATELY_HELD, IPO],
    default: PRIVATELY_HELD
  },
  totalEmployeesRange: String,   // i.e. 10000-12000
  shortDescription: String, //(300 characters or less),
  longDescription: String
});

module.exports = companyInformationSchema;