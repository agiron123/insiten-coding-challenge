const mongoose = require("mongoose");
const CompanyInformationSchema = require("../models/CompanyInformation");
const CompanyInformationModel = mongoose.model('CompanyInformation', CompanyInformationSchema);

const CompanyInformationService = {
  getAll: async () => {
    try {
      return await CompanyInformationModel.find({});
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await CompanyInformationModel.findOne({_id: id});
    } catch(error) {
      return error;
    }
  },
  createContactInformation: async (companyInformation) => {
    try {
      const companyInformationModel = new CompanyInformationModel(companyInformation);
      return await companyInformationModel.save();
    } catch(error) {
      throw error;
    }
  },
  updateContactInformation: async (contactInformationId, contactInformation) => {
    try {
      return await CompanyInformationModel.findOneAndUpdate({_id: contactInformationId }, contactInformation)
    } catch(error) {
      throw error;
    }
  },
  deleteContactInformation: async (contactInformationId) => {
    try {
      return await CompanyInformationModel.deleteOne({_id: contactInformationId})
    } catch(error) {
      throw error;
    }
  }
};

module.exports = CompanyInformationService;