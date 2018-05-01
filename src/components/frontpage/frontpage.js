import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import './frontpage.css';
import { refreshAuthToken, clearAuth, authWarning } from '../../actions/auth';
import Postpage from '../postpage/postpage';
import Accountpage from '../accountpage/accountpage';
import Loginpage from '../loginpage/loginpage';
import Signuppage from '../signuppage/signuppage';
import Navbar from '../navbar/navbar';
// import About from '../about/about';
// import Adtabs from '../adtabs/adtabs';
import Ads from '../ads/ads';
import Footer from '../footer/footer';

export class Frontpage extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch(clearAuth());
        }, 15000)
        setTimeout(() => {
            this.props.dispatch(authWarning());
        }, 10000)
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 10 * 1000 // 10 minutes
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    warning() {
        if (this.props.warning) {
            return <h1>You are getting kicked out for inactivity.</h1>
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="mainSection">
                    {/* <Route exact path="/" component={About} /> */}
                    {/* <Route exact path="/" component={Adtabs} /> */}
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

}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    warning: state.auth.warning
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Frontpage));

