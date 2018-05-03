import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.css';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

export class Navbar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout blue" onClick={() => this.logOut()}>
          Log out
        </button>
      );
    }
    return (
      <div className="nav">
        <div className="logo-container">
          <label className="logo-text-top">Musixchange</label>
        </div>

        <label htmlFor="toggle" className="hamburger">&#9776;</label>
        <input type="checkbox" id="toggle" />

        <div className="menu">
          <Link to="/">For Sale</Link>
          <Link to="/post">Post</Link>
          {!this.props.loggedIn && (
            <React.Fragment>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </React.Fragment>
          )}
          <Link to="/account">Account</Link>
          {logOutButton}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(Navbar);
