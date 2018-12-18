const mongoose = require("mongoose");
const ContactInformationSchema = require("../models/ContactInformation");
const ContactInformationModel = mongoose.model("ContactInformation", ContactInformationSchema);

const ContactInformationService = {
  getAll: () => {
    let targetList = [
      {
        foo: "bar"
      }
    ];

    return targetList;
  },
  getById: (id) => {
    return {
      foo: "bar"
    }
  },
  createContactInformation: async (contactInformation) => {
    try {
      const contactInformationModel = new ContactInformationModel(contactInformation);
      let createdContactInformation = await contactInformationModel.save();
      return createdContactInformation;
    } catch(error) {
      console.log("Error saving contact information: ", error);
    }
  },
  updateContactInformation: (contactInformation) => {
    return {
      foo: "bar"
    };
  },
  deleteContactInformation: (contactInformationId) => {
    // Delete contact information by id.
    return {
      status: "ok"
    }
  }
};

module.exports = ContactInformationService;