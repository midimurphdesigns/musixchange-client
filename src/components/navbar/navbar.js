import React from 'react';
import './navbar.css';

export default function Navbar(props) {
    return (
        <menu className="navbar">
            <li className="navbar-item"><a href="#">What?</a></li>
            <li className="navbar-item"><a href="#">+New Game</a></li>
        </menu>
    )
}