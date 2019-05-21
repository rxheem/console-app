import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class HomeNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    if (!this.props.isAuthed) {
      return (
        <div>
          <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>Console Studios</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about/'>About</Nav.Link>
                <NavDropdown title='Learn More' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/benefits/'>
                    Benefits
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/privacy-policy/'>
                    Privacy Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/terms-of-use/'>
                    Terms of Use
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/register/'>
                    Register Your Church
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* Sign In */}
              <Nav.Link href='/sign-in/'>Sign In</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

export default HomeNavigation;
