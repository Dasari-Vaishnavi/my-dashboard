import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaChartBar, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-light" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
        <Nav.Link href="#users"><FaUser /> Users</Nav.Link>
        <Nav.Link href="#analytics"><FaChartBar /> Analytics</Nav.Link>
        <Nav.Link href="#orders"><FaShoppingCart /> Orders</Nav.Link>
        <Nav.Link href="#settings"><FaCog /> Settings</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
