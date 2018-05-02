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
                <button className="button" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="navbar">
                <div className="logo">
                    <label className="logo-text-top">Musixchange</label>
                    <label className="logo-text-bottom">buy & sell music gear</label>
                </div>
                <menu className="navbar">
                    <li className="navbar-item"><Link to="/">For Sale</Link></li>
                    {/* <label className="navbar-line">|</label> */}
                    <li className="navbar-item"><Link to="/post">Post</Link></li>
                    {/* <label className="navbar-line">|</label> */}
                    <li className="navbar-item"><Link to="/account">Account</Link></li>
                    {/* <label className="navbar-line">|</label> */}
                    <li className="navbar-item"><Link to="/signup">Signup</Link></li>
                    {/* <label className="navbar-line">|</label> */}
                    <li className="navbar-item"><Link to="/login">Login</Link></li>
                    {logOutButton}
                </menu>
                {/* <form className="search-container">
                    <input placeholder="search" className="search" />
                </form> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);