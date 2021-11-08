import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import './Footer.css';
const Footer = () => (
  <footer className="site-footer">
    <Container>
      <Row style={{textAlign: 'start'}}>
        <Col sm={12} md={6}>
          <h6>About</h6>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam, fugit quod
            reiciendis asperiores, vel aspernatur, porro aut vitae minus reprehenderit explicabo et
            natus ducimus accusantium earum in culpa velit.
          </p>
        </Col>

        <Col xs={6} md={3}>
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <a href="/product">Macintosh</a>
            </li>
            <li>
              <a href="/product">Iphone</a>
            </li>
            <li>
              <a href="/product">Ipad</a>
            </li>
            <li>
              <a href="/product">Airpods</a>
            </li>
            <li>
              <a href="/product">Accessories</a>
            </li>
            <li>
              <a href="/product">Shipping & Return</a>
            </li>
          </ul>
        </Col>

        <Col xs={6} md={3}>
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Contribute</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
    </Container>
    <Container>
      <Row>
        <Col md={8} sm={6} xs={12}>
          <p className="copyright-text">
            Copyright &copy; 2021 All Rights Reserved by <a href="/">Ori Store </a>.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
