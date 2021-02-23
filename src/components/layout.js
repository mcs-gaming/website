import React from 'react';

import './style.scss';
// import '../styles/debug.scss';
import Helmet from './helmet';
import Nav from './nav';
import Footer from './footer';

const Layout = ({ children }) => (
  <div id="wrapper">
    <Helmet />
    <Nav />
    <section className="section">
      <div className="container">
        <div id="children-content">{children}</div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Layout;
