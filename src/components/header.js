import React from 'react';
import './style.scss';
import mcsLogo from '../images/mcs-logo.png';
import Navigation from './navigation';
import { FaDiscord } from 'react-icons/fa';
import McsVideo from '../assets/mcs-logo-animation.mp4';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navigation />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<video width="800" height="600" playsInline autoPlay muted loop>
								<source src={McsVideo} type="video/mp4" />
								Your browser does not support the video tag.
							</video> 
							<h1 className="is-uppercase is-size-1 has-text-white">
								Mocu Gaming Squad
							</h1>
							<p className="subtitle has-text-white is-size-3">
								A multi-game team
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
