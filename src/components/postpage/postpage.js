import React from 'react';
import { connect } from 'react-redux'

import './postpage.css';
import { fetchProtectedData } from '../../actions/protected-data';
import Postform from '../postform/postform';
import requiresLogin from '../../requires-login';

export class Postpage extends React.Component {

    redirectToFrontpage = () => {
        this.props.history.push('/')
    }

    render() {
        return (<Postform redirect={this.redirectToFrontpage} />);
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        email: `${currentUser.email}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Postpage));
// export default connect()(Postpage) 