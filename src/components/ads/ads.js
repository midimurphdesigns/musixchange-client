import React from 'react';
import './ads.css';
import { AdsServices } from '../../services/api';

export default class Ads extends React.Component {
  state = {
    ads: [],
  };

  componentDidMount() {
    this.fetchAds();
  }

  fetchAds = () => {
    AdsServices.getAds()
      .then(res => this.setState({ ads: res }))
      .catch(err => {
        console.log('====================================');
        console.log('error', err);
        console.log('====================================');
      });
  };

  render() {
    return (
      <div className="section-container">
        <h1 className="page-title">Gear for Sale</h1>
        {this.state.ads.map((element, index) => {
          return (
            <div className="ads-container row" key={String(index)}>
              <div className="instrument-details">
                <div className="pic-info col-4">
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
                <div className="instrument-about col-4">
                  <label className="info-label">Price:</label>
                  <label className="user-info">{element.price}</label>
                  <label className="info-label">Seller:</label>
                  <label className="user-info">{element.author.username}</label>
                  <label className="info-label">Email:</label>
                  <label className="user-info">{element.author.email}</label>
                  {/* <button
                    className="ping-seller-button blue push_button"
                    type="button"
                  >
                    Ping the Seller
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
