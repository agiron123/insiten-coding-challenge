import React, { Component } from "react";
import { Button } from "reactstrap";

export class ContactInformationListPage extends Component {
  render() {
    return (
        <div>
            <h2>Hello from ContactInformationListPage!</h2>
            <Button href="/contact-information/create/">New Contact Information</Button>
        </div>
    )
  }
}

export default ContactInformationListPage;