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
  createTarget: (targetInformation) => {
    return { // Returns the created target if successful, error if not.
      foo: "bar"
    }
  }
};

module.exports = TargetService;