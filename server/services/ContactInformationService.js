const mongoose = require("mongoose");
const ContactInformationSchema = require("../models/ContactInformation");
const ContactInformationModel = mongoose.model("ContactInformation", ContactInformationSchema);

const ContactInformationService = {
  getAll: async () => {
    try {
      return await ContactInformationModel.find({});
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await ContactInformationModel.findOne({_id: id});
    } catch(error) {
      return error;
    }
  },
  createContactInformation: async (contactInformation) => {
    try {
      const contactInformationModel = new ContactInformationModel(contactInformation);
      return await contactInformationModel.save();
    } catch(error) {
      throw error;
    }
  },
  updateContactInformation: async (contactInformationId, contactInformation) => {
    try {
      return await ContactInformationModel.findOneAndUpdate({_id: contactInformationId }, contactInformation)
    } catch(error) {
      throw error;
    }
  },
  deleteContactInformation: async (contactInformationId) => {
    try {
      return await ContactInformationModel.deleteOne({_id: contactInformationId})
    } catch(error) {
      throw error;
    }
  }
};

module.exports = ContactInformationService;