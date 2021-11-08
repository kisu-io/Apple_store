import React from 'react';
import './HomePage.css';
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap';
const HomePage = () => {
  return (
    <div className="masthead">
      <div className="container">
        <div className="main">
          <h3 className="text">Ori Store</h3>
          <Button as={NavLink} to="/product" className="button" size="lg">
            Get the latest deals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
