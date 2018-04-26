import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import Frontpage from '../frontpage/frontpage';
import Postpage from '../postpage/postpage';
import Accountpage from '../accountpage/accountpage';
import Loginpage from '../loginpage/loginpage';
import Signuppage from '../signuppage/signuppage';


export default function Navbar(props) {
    return (
            <div className="navbar">
                <div className="logo">
                    <label className="logo-text-top">Musixchange</label>
                    <label className="logo-text-bottom">Music gear ads</label>
                </div>
                <menu className="navbar">
                        <li className="navbar-item"><Link to="/">For Sale</Link></li>
                        <li className="navbar-item"><Link to="/post">Post</Link></li>
                        <li className="navbar-item"><Link to="/account">Account</Link></li>
                        <li className="navbar-item"><Link to="/login">Login</Link></li>
                        <li className="navbar-item"><Link to="/signup">Signup</Link></li>
                </menu>
                <form className="search-container">
                    <input placeholder="search" className="search" />
                </form>
            </div>
    )
}