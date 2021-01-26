import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<div id="children-content">
			{children}
		</div>
		<Footer />
	</div>
);

export default Layout;
