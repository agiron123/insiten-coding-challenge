const mongoose = require("mongoose");
const TargetSchema = require("../models/Target");
const TargetModel = mongoose.model("Target", TargetSchema);

const TargetService = {
  getAll: async () => {
    try {
      return await TargetModel.find({});
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await TargetModel.findById(id);
    } catch (error) {
      throw error;
    }
  },
  createTarget: async (targetInformation) => {
    try {
      const targetModel = new TargetModel(targetInformation);
      return await targetModel.save();
    } catch(error) {
      console.log("Error creating target");
      throw error;
    }
  },
  updateTarget: async (targetId, targetInformation) => {
    try {
      return await TargetModel.findOneAndUpdate({_id: targetId}, targetInformation)
    } catch(error) {
      throw error; 
    }
  },
  deleteTarget: async (targetId) => {
    try {
      return await TargetModel.deleteOne({ _id: targetId})
    } catch(error) {
      throw error;
    }
  }
};

module.exports = TargetService;