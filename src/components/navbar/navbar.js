import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.css';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import Frontpage from '../frontpage/frontpage';
import Postpage from '../postpage/postpage';
import Accountpage from '../accountpage/accountpage';
import Loginpage from '../loginpage/loginpage';
import Signuppage from '../signuppage/signuppage';

export class Navbar extends React.Component {
    
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="navbar">
                <div className="logo">
                    <label className="logo-text-top">Musixchange</label>
                    <label className="logo-text-bottom">Music gear ads</label>
                </div>
                <menu className="navbar">
                    <li className="navbar-item"><Link to="/">For Sale</Link></li>
                    <label className="navbar-item">|</label>
                    <li className="navbar-item"><Link to="/post">Post</Link></li>
                    <label className="navbar-item">|</label>
                    <li className="navbar-item"><Link to="/account">Account</Link></li>
                    <label className="navbar-item">|</label>
                    <li className="navbar-item"><Link to="/signup">Signup</Link></li>
                    <label className="navbar-item">|</label>
                    <li className="navbar-item"><Link to="/login">Login</Link></li>
                    {logOutButton}
                </menu>
                {/* <form className="search-container">
                    <input placeholder="search" className="search" />
                </form> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);





// export default function Navbar(props) {
//     return (
//         <div className="navbar">
//             <div className="logo">
//                 <label className="logo-text-top">Musixchange</label>
//                 <label className="logo-text-bottom">Music gear ads</label>
//             </div>
//             <menu className="navbar">
//                 <li className="navbar-item"><Link to="/">For Sale</Link></li>
//                 <li className="navbar-item"><Link to="/post">Post</Link></li>
//                 <li className="navbar-item"><Link to="/account">Account</Link></li>
//                 <li className="navbar-item"><Link to="/signup">Signup</Link></li>
//                 <li className="navbar-item"><Link to="/login">Login</Link></li>
//                 {logOutButton}
//             </menu>
//             <form className="search-container">
//                 <input placeholder="search" className="search" />
//             </form>
//         </div>
//     )
// }