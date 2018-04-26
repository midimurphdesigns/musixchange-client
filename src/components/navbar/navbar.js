import React from 'react';
import './navbar.css';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="logo">
                <label className="logo-text-top">Musixchange</label>
                <label className="logo-text-bottom">Music and audio gear ads</label>
            </div>
            <menu className="navbar">
                <li className="navbar-item"><a href="/">For Sale</a></li>
                <li className="navbar-item"><a href="/">Post</a></li>
                <li className="navbar-item"><a href="/">Account</a></li>
                <li className="navbar-item"><a href="/">Login</a></li>
                <li className="navbar-item"><a href="/">Signup</a></li>
            </menu>
            <form className="search">
                <input placeholder="search" className="search" />
            </form>
        </div>

    )
}