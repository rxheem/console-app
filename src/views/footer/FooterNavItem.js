import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const FooterNavItem = props => {
  return (
    <Nav.Item>
      <Link
        role='button'
        className='nav-link'
        to={props.to}
        style={{ color: '#ddd' }}
      >
        {props.title}
      </Link>
    </Nav.Item>
  );
};

export default FooterNavItem;
