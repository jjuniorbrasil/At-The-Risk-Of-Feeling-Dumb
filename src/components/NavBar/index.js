import React from 'react';
import { Nav } from './styled.js';
import { Link } from './../../styles/GlobalStyles.js';

export default function NavBar() {
  return (
    <Nav>
      <Link to={'/about'}>About</Link>
      <Link
        target="blank"
        to={
          'https://www.paypal.com/donate/?business=LFNDM9LPSLDLU&no_recurring=0&item_name=Please%2C+just+do+it+if+I+really+did+something+for+you.&currency_code=BRL'
        }
      >
        Donate
      </Link>
    </Nav>
  );
}
