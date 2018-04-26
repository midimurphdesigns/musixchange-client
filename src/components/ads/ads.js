import React from 'react';
import './ads.css';
import {AdsServices} from '../../services/api'

export default class Ads extends React.Component {

  state = {
    ads: []
  }

  componentDidMount() {
    this.fetchAds()
  }

  fetchAds = () => {
      AdsServices.getAds().then(res => this.setState({ads:res}))
  }

  render() {
    return (
      <div className="ads-container">
        {this.state.ads.map((el, index) => (
          <label
            key={String(index)}
            className="ads-container"
          >{el}</label>
        ))}
      </div>
    )
  }
}