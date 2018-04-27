import React from 'react';
import { connect } from 'react-redux'

import './postpage.css';
import Navbar from '../navbar/navbar';
import Postform from '../postform/postform';
import Footer from '../footer/footer';

function Postpage(props) {
    return (
        <div>
            <Postform />
        </div>
    )
}

export default connect()(Postpage) 