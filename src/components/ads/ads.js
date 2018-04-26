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
          console.log(element)
          return (
            <div className="ads-container" key={String(index)}>

              <div className="instrument-details">
                <img
                  src={element.image}
                  alt="picture of instrument for sale"
                  className="ad-image"
                />

                <div className="instrument-about">
                  <label
                    className="ad-title"
                  >{element.title}</label>

                  <label
                    className="ainstrument-type"
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
              </div>

              <div className="seller-details">
                <label>seller details go here</label>
              </div>

            </div>

          )
        })}
      </div>
    )
  }
}