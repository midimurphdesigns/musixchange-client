import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import './frontpage.css';
import Postpage from '../postpage/postpage';
import EditPage from '../editPage/EditPage';
import Accountpage from '../accountpage/accountpage';
import Loginpage from '../loginpage/loginpage';
import Signuppage from '../signuppage/signuppage';
import Navbar from '../navbar/navbar';
import Posts from '../posts/posts';
import Footer from '../footer/footer';
import Onboard from '../onboard/onboard';

export class Frontpage extends React.Component {

  state = {
    showAds: false
  }

  _goToApp = () => {
    this.setState({
      showAds: true,
    })

    localStorage.setItem('showAds', 'true');
  }

  render() {
    if (this.state.showAds) {
      return (
        <React.Fragment>
          <div className="page-container">
            <Navbar />
            <div className="mainSection">
              <Route exact path="/" component={Posts} />
              <Route exact path="/post" component={Postpage} />
              <Route exact path="/account" component={Accountpage} />
              <Route exact path="/login" component={Loginpage} />
              <Route exact path="/signup" component={Signuppage} />
              <Route exact path="/posts/:id/edit" component={EditPage} />
              <Footer />
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <Route exact path="/" component={Onboard} />
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  warning: state.auth.warning,
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Frontpage));
