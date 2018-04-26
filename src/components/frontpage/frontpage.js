import React from 'react';

import './frontpage.css';
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
                <About />
                <Adtabs />
                <Ads />
                <Footer />
            </div>

        </React.Fragment>
    )
}
