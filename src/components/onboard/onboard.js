import React from 'react';
import { connect } from 'react-redux';

import './onboard.css';
import { showPosts } from '../../actions/showPosts'

class Onboard extends React.Component {
  render() {
    return (
      <div className="onboard-page-container">

        <div className="row">
          <div className="col-12">
            <h1 className="title about-steps">Musixchange</h1>
            <h2 className="slogan about-steps">Buy and sell used music gear</h2>
          </div>
        </div>

        <div className="row">
          <div className="buttons-container col-12">
            <button
              className="onboard-buttons push_button blue col-4"
              onClick={() => {
                this.props.dispatch(showPosts())
                this.props.history.push('/login')
              }}
            >Login</button>
            <button
              className="onboard-buttons push_button blue col-4"
              onClick={() => {
                this.props.dispatch(showPosts())
                this.props.history.push('/signup')
              }}
            >Signup</button>
            <button
              className="onboard-buttons push_button blue col-4"
              onClick={() => {
                this.props.dispatch(showPosts())
              }}
            >See Ads</button>
          </div>
        </div>

        <div className="row-wrapper row">
          <div className="about-container col-6">
            <div className="icon">
              <i className="fa fa-headphones"></i>
            </div>
            <div>
              <h2 className="about-steps">Key Features:</h2>
              <span className="about-steps">- Browse music gear ads</span>
              <span className="about-steps">- Create music gear ads</span>
              <span className="about-steps">- Edit & remove your ads</span>
              <span className="about-steps">- Get seller contact info</span>
            </div>
          </div>

          <div className="about-container col-6">
            <div className="icon">
              <i className="fa fa-forward"></i>
            </div>
            <div>
              <h2 className="about-steps">Upcoming app features:</h2>
              <span className="about-steps">-Ping seller button </span>
              <span className="about-steps">-Ping notifications on account page</span>
              <span className="about-steps">-Sort gear ads via tabs by type</span>
              <span className="about-steps">-Gear ad search functionality</span>
              <span className="about-steps">-Instant chat</span>
            </div>
          </div>
        </div>

        <div className="row-wrapper row">
          <div className="about-container col-6">
            <div className="icon">
              <i className="fa fa-microphone"></i>
            </div>
            <div>
              <h2 className="about-steps">Seller Instructions:</h2>
              <span className="about-steps">1) Signup or login</span>
              <span className="about-steps">2) Make a post</span>
              <span className="about-steps">3) View post on the for sale page</span>
              <span className="about-steps">4) Edit or delete post on account page</span>
            </div>
          </div>

          <div className="about-container col-6">
            <div className="icon">
              <i className="fa fa-music"></i>
            </div>
            <div>
              <h2 className="about-steps">Buying Instructions:</h2>
              <span className="about-steps">1) Browse music gear for sale</span>
              <span className="about-steps">2) Find email and username of seller</span>
              <span className="about-steps">3) Discuss details of sale via email</span>
            </div>
          </div>
        </div>

      </div >
    )
  }
}

const mapStateToProps = state => ({
  postsState: state.post,
});

export default connect(mapStateToProps)(Onboard);