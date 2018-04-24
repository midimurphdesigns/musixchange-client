import React from 'react';

import './login.css';
import Navbar from './Navbar/Navbar';
import UserInfo from './UserInfo/UserInfo';
import Footer from './Footer/Footer';

export default function Login(props) {
    return (
        <div>
            <Navbar />
            <UserInfo />
            <Footer />
        </div>
    )
}