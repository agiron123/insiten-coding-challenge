import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateTargetPage } from "./CreateTargetPage";
import { TargetList } from "./TargetList";
import { AboutPage } from "./AboutPage";
import NavigationBar from "./Navbar/NavigationBar";
import CompanyInformationList from "./CompanyInformationListPage";
import CreateCompanyInformationPage from "./CreateCompanyInformationPage"
import { CreateContactInformationPage } from "./CreateContactInformationPage";
import { ContactInformationListPage } from "./ContactInformationListPage";
import { AddressListPage } from "./AddressListPage";
import { CreateAddressPage } from "./CreateAddressPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavigationBar />
          <Router>
            <div>
              <Route path="/targets/list/" component={TargetList} />
              <Route path="/targets/create/" component={CreateTargetPage} />
              <Route path="/company-information/list/" component={CompanyInformationList} />
              <Route path="/company-information/create/" component={CreateCompanyInformationPage} />
              <Route path="/contact-information/list/" component={ContactInformationListPage} />
              <Route path="/contact-information/create/" component={CreateContactInformationPage} />
              <Route path="/address/list/" component={AddressListPage} />
              <Route path="/address/create/" component={CreateAddressPage} />
              <Route path="/about/" component={AboutPage} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
