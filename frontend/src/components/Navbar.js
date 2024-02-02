import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
const Navbar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Singup
        </Link>
      </li>
    </Fragment>
  );
  const authLinks = () => (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={logout}>
        Logout
      </a>
    </li>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              {isAuthenticated ? authLinks() : guestLinks()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(Navbar);
