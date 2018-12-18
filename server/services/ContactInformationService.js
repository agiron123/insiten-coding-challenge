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
  createTarget: (contactInformation) => {
    return { // Returns the created ContactInformation object if successful, error if not.
      foo: "bar"
    }
  }
};

module.exports = ContactInformationService;