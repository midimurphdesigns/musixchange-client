import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './signuppage.css';
import SignupForm from '../signupform/signupform';

export function SignupPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <SignupForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);