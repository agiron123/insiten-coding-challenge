import mongoose from "mongoose";
import CompanyInformation from "./CompanyInformation";
import ContactInformation from "./ContactInformation";

let Schema = mongoose.Schema;

const RESEARCHING = "RESEARCHING";
const PENDING_APPROVAL = "PENDING_APPROVAL";
const APPROVED = "APPROVED";
const DECLINED = "DECLINED";

const targetSchema = new Schema({
  companyInformation: CompanyInformation,
  allocatedBudget: String, // How much money we want to spend on this target. i.e. 1.5M - 2M
  stakeholders: [ContactInformation], // People who are key stakeholders in buying this company
  status: {
    type: String,
    enum: [RESEARCHING, PENDING_APPROVAL, APPROVED, DECLINED],
    default: RESEARCHING
  }
});

export default targetSchema;