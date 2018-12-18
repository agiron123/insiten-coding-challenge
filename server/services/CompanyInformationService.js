const mongoose = require("mongoose");
const CompanyInformationSchema = require("../models/CompanyInformation");
const CompanyInformationModel = mongoose.model('CompanyInformation', CompanyInformationSchema);

const CompanyInformationService = {
  getAll: () => {
    let companyInfoList = [
      {
        foo: "bar"
      }
    ];

    return companyInfoList;
  },
  getById: (id) => {
    return {
      foo: "bar"
    }
  },
  createCompanyInformation: async (companyInformation) => {
    try {
      const companyInformationModel = new CompanyInformationModel(companyInformation);
      let createdCompanyInformation = await companyInformationModel.save();
      return createdCompanyInformation;
    } catch(error) {
      console.log("Error creating company information: ", error);
    }
  },
  updateCompanyInformation: (companyInformation) => {
    return {
      foo: "bar"
    }
  },
  deleteCompanyInformation: (companyInformationId) => {
    // Delete company information by id.
    return {
      status: "ok"
    }
  }
};

module.exports = CompanyInformationService;