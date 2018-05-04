import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../requires-login';

import './accountpage.css';
import UserInfo from '../userinfo/userinfo';
import { PostsServices } from '../../services/api';

export class AccountPage extends React.Component {
  state = {
    myPosts: [],
  };

  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.fetchPosts();
  }

  _goToEdit = id => {
    this.props.history.push(`/posts/${id}/edit`);
  };

  fetchPosts = () => {
    PostsServices.getMyPosts()
      .then(res => this.setState({ myPosts: res }))
      .catch(error => console.log(error));
  };

  render() {
    return <UserInfo goToEdit={this._goToEdit} />;
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
