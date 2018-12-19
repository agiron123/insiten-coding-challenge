import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// Took most of this navbar example from the reacstrap docs.
// see here: https://reactstrap.github.io/components/navbar/
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Insiten Coding Challenge - Andre Giron</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/targets/list/">Targets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/company-information/list/">Company Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/addresses/list/">Addresses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-information/list/">Contact Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/agiron123/insiten-coding-challenge/">Github Repo</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}