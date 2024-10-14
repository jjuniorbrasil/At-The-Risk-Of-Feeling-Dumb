import React from 'react';
import { Nav } from './styled.js';
import { Link } from './../../styles/GlobalStyles.js';

export default function NavBar() {
  return (
    <Nav>
      <Link to={'/about'}>About</Link>
      <Link to={'/about'}>Donate</Link>
    </Nav>
  );
}
