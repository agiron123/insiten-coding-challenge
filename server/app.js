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

app.get('/api/addresses/list/', async function(req, res) {
  let addressList = await AddressService.getAll();
  res.json(addressList);
});

app.post("/api/addresses/", async function(req, res) {
  let createdAddress = await AddressService.createAddress(req.body);
  res.json(createdAddress);
})

app.get("/api/company-information/list/", async function(req, res) {
  let companyInfoList = await CompanyInformationService.getAll();
  res.json(companyInfoList);
});

app.post("/api/company-information/", async function(req, res) {
  let createdCompanyInformation = await CompanyInformationService.createCompanyInformation(req.body);
  res.json(createdCompanyInformation);
});

app.get("/api/contact-information/list/", async function(req, res) {
  let contactInfoList = await ContactInformationService.getAll();
  res.json(contactInfoList);
});

app.post("/api/contact-information/", async function(req, res) {
  let createdContactInformation = await ContactInformationService.createContactInformation(req.body);
  res.json(createdContactInformation);
})

app.get("/api/targets/list/", async function(req, res) {
  let targetList = await TargetService.getAll();
  res.json(targetList);
});

app.post("/api/target", async function(req, res) {
  let createdTarget = await TargetService.createTarget(req.body);
  res.json(createdTarget);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// TODO: Use Winston or bunyan to handle logging.
console.log("Starting server on port 9000!");
app.listen(9000);