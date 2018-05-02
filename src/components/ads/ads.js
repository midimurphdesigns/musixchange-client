import React from 'react';
import './ads.css';
import { AdsServices } from '../../services/api'

export default class Ads extends React.Component {

  state = {
    ads: []
  }

  componentDidMount() {
    this.fetchAds()
  }

  fetchAds = () => {
    AdsServices.getAds().then(res => this.setState({ ads: res }))
  }

  render() {
    return (
      <div className="section-container">
        {this.state.ads.map((element, index) => {
          // console.log(element)
          return (
            <div className="ads-container" key={String(index)}>

              <div className="instrument-details">
                <img
                  src={element.image}
                  alt="instrument for sale"
                  className="ad-image"
                />

                <div className="instrument-about">
                  <label
                    className="ad-title"
                  >{element.title}</label>

                  <label
                    className="instrument-type"
                  >{element.instrumentType}</label>

                  <label
                    className="instrument-name"
                  >{element.instrumentName}</label>

                  <label
                    className="instrument-description"
                  >{element.description}</label>

                  <label
                    className="instrument-condition"
                  >{element.condition}</label>

                  <label
                    className="price"
                  >{element.price}</label>
                </div>
                <div className="seller-details">
                  <label className="username">Username:</label>
                  <label className="user-info">{element.author.username}</label>
                  <label className="user-email">Email:</label>
                  <label className="user-info">{element.author.email}</label>
                  <button className="ping-seller-button blue push_button" type="button">Ping the Seller</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}