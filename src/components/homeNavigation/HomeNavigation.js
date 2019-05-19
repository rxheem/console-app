import React, { Component } from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';

class HomeNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // Captures the state
    const { activeItem } = this.state;

    return (
      <Container style={{ paddingTop: '10px' }}>
        <Menu secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            href='/'
          />
          <Menu.Item
            name='aim'
            active={activeItem === 'aim'}
            onClick={this.handleItemClick}
            href='/aim/'
          />
          <Menu.Item
            name='join'
            active={activeItem === 'join'}
            onClick={this.handleItemClick}
            href='/join/'
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            href='/contact/'
          />

          {/* Right aligned menu */}
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>

            {/* Log in button */}
            <Menu.Item
              name='sign in'
              active={activeItem === 'sign in '}
              onClick={this.handleItemClick}
              href='/sign-in/'
            />
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default HomeNavigation;
