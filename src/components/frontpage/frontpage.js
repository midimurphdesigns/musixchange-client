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
import Ads from '../ads/ads';
import Footer from '../footer/footer';

export class Frontpage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="page-container">
          <Navbar />
          <div className="mainSection">
            <Route exact path="/" component={Ads} />
            <Route exact path="/post" component={Postpage} />
            <Route exact path="/account" component={Accountpage} />
            <Route exact path="/login" component={Loginpage} />
            <Route exact path="/signup" component={Signuppage} />
            <Route exact path="/ads/:id/edit" component={EditPage} />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  warning: state.auth.warning,
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Frontpage));
