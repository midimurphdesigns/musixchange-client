import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../requires-login';

import './userinfo.css';
import { AdsServices } from '../../services/api';

export class UserInfo extends React.Component {
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

    handleDelete = (id) => {
        if (window.confirm('Are you sure?')) {
            AdsServices.deleteAd(id).then(() => {
                this.setState({
                    myAds: this.state.myAds.filter(el => el.id !== id)
                })
            })
        }
    }

    render() {
        return (
            <div className="info-container">
                <h1 className="username">Username Goes Here</h1>
                <section className="current-ads">
                    {this.state.myAds.map(el => (
                        <div key={el.id}>
                        <p>{el.title}</p>
                            <button>Edit</button>
                            <button onClick={() => this.handleDelete(el.id)}>Delete</button>
                        </div>
                    ))}
                </section>
                <section className="ping-notifications">Ping notifications go here</section>
            </div>
        )
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

export default requiresLogin()(connect(mapStateToProps)(UserInfo));