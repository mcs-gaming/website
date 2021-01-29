import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Nav from './nav';
import Footer from './footer';

const Layout = ({ children }) => (
  <div id="wrapper">
    <Helmet />
    <Nav />
    <div id="children-content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
