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
        {this.state.ads.map((element, index) => {
          return (
            <div className="ads-container row" key={String(index)}>
              <div className="instrument-details">
                <img
                  src={element.image}
                  alt="instrument for sale"
                  className="ad-image col-4"
                />

                <div className="instrument-about col-4">
                  <label className="instrument-label">{element.title}</label>

                  <label className="instrument-label">
                    {element.instrumentType}
                  </label>

                  <label className="instrument-label">
                    {element.instrumentName}
                  </label>

                  <label className="instrument-label">
                    {element.description}
                  </label>

                  <label className="instrument-label">
                    {element.condition}
                  </label>

                  <label className="price">{element.price}</label>
                </div>
                <div className="seller-details col-4">
                  <label className="username">Username:</label>
                  <label className="user-info">{element.author.username}</label>
                  <label className="user-email">Email:</label>
                  <label className="user-info">{element.author.email}</label>
                  <button
                    className="ping-seller-button blue push_button"
                    type="button"
                  >
                    Ping the Seller
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
