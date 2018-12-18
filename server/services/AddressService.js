const mongoose = require("mongoose");
const AddressSchema = require("../models/Address");
const AddressModel = mongoose.model('Address', AddressSchema);

const AddressService = {
  getAll: () => {

    let addressList = [
      {
        streetLine1: "123 Main St.",
        streetLine2: "Unit 456",
        city: "Atlanta",
        state: "GA",
        zip: 12345
      }
    ];

    return addressList;
  },
  getById: (id) => {
    return {
      foo: "bar"
    }
  },
  createAddress: async (addressInformation) => {
    try {
      const addressModel = new AddressModel(addressInformation);
      let createdAddress = await addressModel.save()
      return createdAddress;
    } catch(error) {
      console.log("Error creating address.");
    }
  },
  updateAddress: (addressInformation) => {
    return { // Updates the current address
      foo: "bar"
    }
  },
  deleteAddress: (addressId) => {
    // Delete an address by id.
    return {
      status: "ok"
    }
  }
};

module.exports = AddressService;