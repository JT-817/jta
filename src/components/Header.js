import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar dark color="primary" sticky="top" expand='md'>
      <NavbarBrand href="/" className="">
        JTA
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className=''/>
      <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/">
            <i className="fa fa-lg fa-home" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <i className="fa fa-lg fa-product-hunt" />
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <i className="fa fa-lg fa-book" />
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <i className="fa fa-lg fa-address-card" /> 
            Contact
          </NavLink>
        </NavItem>
      </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
