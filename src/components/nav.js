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
        <Link to="/" className="navbar-item">
          <img src={mcsNavLogo} width="62" alt="MCS Logo" />
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <a className="navbar-item" href="/">News</a>

          <Link className="navbar-item" to="/about">
            About
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/">Team</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/">Apex Legends</a>
              <Link className="navbar-item" to="/team/diabotical">Diabotical</Link>
              <a className="navbar-item" href="/">World of Warcraft</a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/">Tryout for our squad</a>
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
              <a className="button is-light" href="/">
                <strong>Scrim us</strong>
              </a>
              <a className="button is-dark" href="/">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
