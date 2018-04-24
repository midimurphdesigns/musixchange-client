import React from 'react';

import './Signup.css';
import Navbar from './Navbar/Navbar';
import UserInfo from './UserInfo/UserInfo';
import Footer from './Footer/Footer';

export default function Signup(props) {
    return (
        <div>
            <Navbar />
            <UserInfo />
            <Footer />
        </div>
    )
}