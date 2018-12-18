import mongoose from "mongoose";
import CompanyInformation from "./CompanyInformation";
import Address from "./Address";

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

export default contactInformationSchema;
