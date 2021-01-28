import React from 'react';
import './style.scss';
import mcsNavLogo from '../images/mcs-nav-logo.png';
import { Link } from 'gatsby';

const Nav = () => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={mcsNavLogo} width="62" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">News</a>

          <a className="navbar-item">About</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Team</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Apex Legends</a>
              <a className="navbar-item">Diabotical</a>
              <a className="navbar-item">World of Warcraft</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Tryout for our squad</a>
            </div>
          </div>

          <a
            className="navbar-item"
            href="https://gamersapparel.co.uk/store/mcs"
          >
            Store
          </a>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light">
                <strong>Scrim us</strong>
              </a>
              <a className="button is-dark">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
