import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3" style={{ marginLeft: '250px' }}>
      <Container>
        <p>© 2024 My Dashboard. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
