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

// Routes go here.
app.get('/hello/', function(req, res) {
  res.send("Hello World");
});

app.get('/api/addresses/list/', function(req, res) {
  let addressList = AddressService.getAll();
  res.json(addressList);
});

app.post("/api/addresses/", function(req, res) {
  console.log("Create address req body: ", req.body);
  let createdAddress = AddressService.createAddress(req.body);
  res.json(createdAddress);
})

app.get("/api/company-information/list/", function(req, res) {
  let companyInfoList = CompanyInformationService.getAll();
  res.json(companyInfoList);
});

app.get("/api/contact-information/list/", function(req, res) {
  let contactInfoList = ContactInformationService.getAll();
  res.json(contactInfoList);
})

app.get("/api/targets/list/", function(req, res) {
  let targetList = TargetService.getAll();
  res.json(targetList);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

console.log("Starting server on port 9000!");
app.listen(9000);