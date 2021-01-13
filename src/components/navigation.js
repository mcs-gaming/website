import React from "react"
import "./style.scss"
import mcsLogo from "../images/mcs-logo.png"

const Navigation = () => (
  <nav
    className="navbar has-shadow is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      {/* <!-- logo or branding image on left side --> */}
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={mcsLogo}
            alt="mocu-gaming-squad-logo"
            // width="145"
            // height="200"
          />
        </a>
        <div className="navbar-burger" data-target="navbar-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* <!-- children of navbar-menu must be navbar-start and/or navbar-end --> */}
      <div className="navbar-menu" id="navbar-menu">
        {/* <!-- navbar items | left side --> */}
        {/* <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/">Link</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/">
                Overview
              </a>
              <a className="navbar-item" href="/">
                Elements
              </a>
              <a className="navbar-item" href="/">
                Components
              </a>
              <hr className="navbar-divider" />
              <div className="navbar-item"> Version 0.1.0</div>
            </div>
          </div>
        </div> */}

        {/* <!-- navbar items | right side --> */}
        <div className="navbar-end">
          <a className="navbar-item is-active" href="/">
            {" "}
            Home
          </a>
          <a className="navbar-item" href="/">
            News
          </a>
          <a className="navbar-item" href="/">
            About
          </a>
          <a className="navbar-item" href="/">
            Team
          </a>
          <a className="navbar-item" href="https://gamersapparel.co.uk/store/mcs">
            Store
          </a>
          <a className="navbar-item" href="/">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navigation
