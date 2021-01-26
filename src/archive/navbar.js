import React from 'react';
import { FaDiscord } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import mcsLogo from '../images/mcs-logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://mcsgaming.gg"
					>
						<img src={mcsLogo} alt="mocu-gaming-squad-logo" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							<a
								className="button is-danger is-inverted"
								href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
							>
								<span className="icon">
									<FaDiscord size="fa-2x" />
								</span>
								<span>Discord</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
