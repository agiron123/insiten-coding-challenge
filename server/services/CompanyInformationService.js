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
  createTarget: (companyInformation) => {
    return { // Returns the created companyInformation if successful, error if not.
      foo: "bar"
    }
  }
};

module.exports = CompanyInformationService;