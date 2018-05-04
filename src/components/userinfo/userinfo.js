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
        this.fetchAds();
    }

    fetchAds = () => {
        AdsServices.getMyAds()
            .then(res => this.setState({ myAds: res }))
            .catch(error => console.log(error));
    };

    handleDelete = id => {
        if (window.confirm('Are you sure?')) {
            AdsServices.deleteAd(id).then(() => {
                this.setState({
                    myAds: this.state.myAds.filter(el => el.id !== id),
                });
            });
        }
    };

    render() {
        return (
            <div className="section-container">
                <h1 className="page-title">Edit or Delete Your Ads</h1>
                {this.state.myAds.map(element => (
                    <div className="ads-container row" key={element.id}>
                        <div className="instrument-details">
                            <div className="col-4">
                                <img
                                    src={element.image}
                                    alt="instrument for sale"
                                    className="ad-image"
                                />
                            </div>
                            <div className="instrument-about col-4">
                                <label className="info-label">Title:</label>
                                <label className="instrument-label">{element.title}</label>
                                <label className="info-label">Description:</label>
                                <label className="instrument-label">{element.description}</label>
                                <label className="info-label">Condition:</label>
                                <label className="instrument-label">{element.condition}</label>
                            </div>
                            <div className="seller-details col-4">
                                <label className="info-label">Price:</label>
                                <label className="instrument-label">{element.price}</label>
                                <button className="edit-delete blue push_button" onClick={() => this.props.goToEdit(element.id)}>Edit</button>
                                <button className="edit-delete blue push_button" onClick={() => this.handleDelete(element.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <section className="ping-notifications">Ping notifications go here</section> */}
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

export default requiresLogin()(connect(mapStateToProps)(UserInfo));
