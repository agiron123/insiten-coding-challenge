const mongoose = require("mongoose");
const TargetSchema = require("../models/Target");
const TargetModel = mongoose.model("Target", TargetSchema);

const TargetService = {
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
  createTarget: async (targetInformation) => {
    try {
      const targetModel = new TargetModel(targetInformation);
      let createdTarget = await targetModel.save();
      return createdTarget;
    } catch(error) {
      console.log("Error creating target");
    }
  },
  updateTarget: (targetInformation) => {
    return {
      foo: "bar"
    }
  },
  deleteTarget: (targetId) => {
    // Delete target by id.
    return {
      status: "ok"
    }
  }
};

module.exports = TargetService;