import React from 'react';
import FooterNavItem from './FooterNavItem';
import { Nav } from 'react-bootstrap';

const Footer = props => {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#282c34',
        height: '70px',
        maxHeight: 'auto',
        lineHeight: '60px',
        marginTop: '20px'
      }}
    >
      <Nav className='justify-content-center'>
        <span />
      </Nav>
    </footer>
  );
};

export default Footer;
