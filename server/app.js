const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const TargetService = require("./services/TargetService");
const AddressService = require("./services/AddressService");
const CompanyInformationService = require("./services/CompanyInformationService");
const ContactInformationService = require("./services/ContactInformationService");

// TODO: Set connection string from environment variable and set up a live database on AWS or azure.
mongoose.connect("mongodb://localhost/insiten", { useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

// BEGIN CRUD ROUTES.
app.get('/hello/', function(req, res) {
  res.send("Hello World");
});

app.get('/api/addresses/list/', async function(req, res) {
  try {
    let addressList = await AddressService.getAll();
    res.json(addressList);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to get Address list."
    }

    res.status(500).json(errorMessage);
  }
});

app.post("/api/addresses/", async function(req, res) {
  try {
    let createdAddress = await AddressService.createAddress(req.body);
    res.json(createdAddress);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to create new Address record."
    }

    res.status(500).json(errorMessage);
  }
});

app.put("/api/addresses/:addressId/", async function(req, res) {
  try {
    let updatedAddress = await AddressService.updateAddress(req.params.addressId, req.body);
    res.json(updatedAddress);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to update Address by id."
    }

    res.status(500).json(errorMessage);
  }
});

app.delete("/api/addresses/:addressId/", async function(req, res) {
  try {
    let deletedAddress = await AddressService.deleteAddress(req.params.addressId);
    res.json(deletedAddress);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to delete address by id."
    }

    res.status(500).json(errorMessage);
  }
})

app.get("/api/company-information/list/", async function(req, res) {
  try {
    let companyInfoList = await CompanyInformationService.getAll();
    res.json(companyInfoList);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to get CompanyInformation list."
    }

    res.status(500).json(errorMessage);
  }
});

app.post("/api/company-information/", async function(req, res) {
  try {
    let createdCompanyInformation = await CompanyInformationService.createCompanyInformation(req.body);
    res.json(createdCompanyInformation);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to create CompanyInformation object."
    }

    res.status(500).json(errorMessage);
  }
});

app.put("/api/company-information/:companyInfoId/", async function(req, res) {
  try {
    let updatedCompanyInformation = await CompanyInformationService.updateCompanyInformation(req.params.companyInfoId, req.body);
    res.json(updatedCompanyInformation);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to update CompanyInformation by id.."
    }

    res.status(500).json(errorMessage);
  }
});

app.delete("/api/company-information/:companyInfoId/", async function(req, res) {
  try {
    let deletedCompanyInformation = await CompanyInformationService.deleteCompanyInformation(req.params.companyInfoId);
    res.json(deletedCompanyInformation);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to delete CompanyInforamtion by id.."
    }

    res.status(500).json(errorMessage);
  }
});

app.get("/api/contact-information/list/", async function(req, res) {
  try {
    let contactInfoList = await ContactInformationService.getAll();
    res.json(contactInfoList);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to retrieve ContactInformation list."
    };

    res.status(500).json(errorMessage);
  }
});

app.get("/api/contact-information/:contactInfoId/", async function(req, res) {
  try {
    let contactResult = await ContactInformationService.getById(req.params.contactInfoId);
    res.json(contactResult);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to find contact by id.."
    };

    res.json(errorMessage);
  }
})

app.post("/api/contact-information/", async function(req, res) {
  try {
    let createdContactInformation = await ContactInformationService.createContactInformation(req.body);
    res.json(createdContactInformation);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to create ContactInformation record."
    };

    res.json(errorMessage);
  }
});

app.put("/api/contact-information/:contactInfoId/", async function(req, res) {
  try {
    let updatedContactInformation = await ContactInformationService.updateContactInformation(req.params.contactInfoId, req.body);
    res.json(updatedContactInformation);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to update ContactInformation record by id."
    };

    res.json(errorMessage);
  }
});

app.delete("/api/contact-information/:contactInfoId/", async function(req, res) {
  try {
    let deletedContactInformation = await ContactInformationService.deleteContactInformation(req.params.contactInfoId);
    res.json(deletedContactInformation);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to delete ContactInformation record by id."
    };

    res.json(errorMessage);
  }
});

app.get("/api/targets/list/", async function(req, res) {
  try {
    let targetList = await TargetService.getAll();
    res.json(targetList);
  } catch(error) {
    let errorMessage = {
      status: "error",
      errorMessage: "Unable to get Target list."
    };

    res.json(errorMessage);
  }
});

app.post("/api/targets/", async function(req, res) {
  try {
    let createdTarget = await TargetService.createTarget(req.body);
    res.json(createdTarget);
  } catch(error) {
    return {
      status: "error",
      errorMessage: "Unable to create target."
    }
  }
});

app.put("/api/targets/:targetId/", async function(req, res) {
  let updatedTarget = await TargetService.updateTarget(req.params.targetId, req.body);
  res.json(updatedTarget);
});

app.delete("/api/targets/:targetId/", async function(req, res) {
  try{
    let deletedTarget = await TargetService.deleteTarget(req.params.targetId);
    res.json(deletedTarget);
  } catch(error) {
    return {
      status: "error",
      errorMessage: "Unable to delete target."
    }
  }
});
// END CRUD ROUTES

// Serve the react static content that is in the build directory.
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// TODO: Use Winston or bunyan to handle logging.
console.log("Starting server on port 9000!");
app.listen(9000);