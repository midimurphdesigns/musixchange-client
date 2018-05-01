import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './loginpage.css';
import LoginForm from '../loginform/loginform';

export function LoginPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <LoginForm />
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);