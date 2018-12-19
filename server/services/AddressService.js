const mongoose = require("mongoose");
const AddressSchema = require("../models/Address");
const AddressModel = mongoose.model('Address', AddressSchema);

const AddressService = {
  getAll: async () => {
    try {
      return await AddressModel.find({});
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await AddressModel.findOne({_id: id});
    } catch(error) {
      return error;
    }
  },
  createAddress: async (addressInformation) => {
    try {
      const addressModel = new AddressModel(addressInformation);
      return await addressModel.save();
    } catch(error) {
      throw error;
    }
  },
  updateAddress: async (addressId, addressInformation) => {
    try {
      return await AddressModel.findOneAndUpdate({_id: addressId }, addressInformation)
    } catch(error) {
      throw error;
    }
  },
  deleteAddress: async (addressId) => {
    try {
      return await AddressModel.deleteOne({_id: addressId})
    } catch(error) {
      throw error;
    }
  }
};

module.exports = AddressService;