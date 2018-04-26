import React from 'react';
import { Route } from 'react-router-dom';

import './frontpage.css';
import Postpage from '../postpage/postpage';
import Accountpage from '../accountpage/accountpage';
import Loginpage from '../loginpage/loginpage';
import Signuppage from '../signuppage/signuppage';
import Navbar from '../navbar/navbar';
import About from '../about/about';
import Adtabs from '../adtabs/adtabs';
import Ads from '../ads/ads';
import Footer from '../footer/footer';

export default function Frontpage(props) {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mainSection">
                <Route exact path="/" component={Ads} />
                <Route exact path="/post" component={Postpage} />
                <Route exact path="/account" component={Accountpage} />
                <Route exact path="/login" component={Loginpage} />
                <Route exact path="/signup" component={Signuppage} />
                <Footer />
            </div>
        </React.Fragment>
    )
}
