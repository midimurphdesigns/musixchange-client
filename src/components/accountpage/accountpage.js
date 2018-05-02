import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../requires-login';
import { fetchProtectedData } from '../../actions/protected-data';

import './accountpage.css';
import UserInfo from '../userinfo/userinfo';
import { AdsServices } from '../../services/api';

export class AccountPage extends React.Component {
  state = {
    myAds: [],
  };

  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.fetchAds();
  }

  fetchAds = () => {
    AdsServices.getMyAds()
      .then(res => this.setState({ myAds: res }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        <UserInfo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    email: `${currentUser.email}`,
    protectedData: state.protectedData.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(AccountPage));
