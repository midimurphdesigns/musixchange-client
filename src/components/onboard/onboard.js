import React from 'react';
import './onboard.css';

export default function About(props) {
  return (
    <div className="about-container row">

      <div ClassName="about-container">
        <label className="about-label">About this app</label>
        <span className="about-info">Musixchange is an app to help you buy or sell music and audio gear in the greater Phoenix area.</span>
        <span className="about-steps"><strong>Key Features:</strong></span>
        <span className="about-steps">- Browse ads</span>
        <span className="about-steps">- Create ads</span>
        <span className="about-steps">- Edit & remove your ads</span>
        <span className="about-steps">- Get seller contact info</span>
      </div>

      <div className="sellers-container">
        <span className="about-steps"><strong>Seller Instructions:</strong></span>
        <span className="about-steps"><strong>1) </strong>Signup or login</span>
        <span className="about-steps"><strong>2) </strong>Make a post</span>
        <span className="about-steps"><strong>3) </strong>View your post on the for sale page</span>
        <span className="about-steps"><strong>4) </strong>Edit or delete your post on the account page</span>
      </div>

      <div className="buyers-container">
        <span className="about-steps"><strong>Buying Instructions:</strong></span>
        <span className="about-steps"><strong>1) </strong>Browse gear for sale</span>
        <span className="about-steps"><strong>2) </strong>Find email and username of seller</span>
        <span className="about-steps"><strong>3) </strong>Discuss details of sale via email</span>
      </div>

      <div className="upcoming-container">
        <span className="about-steps"><strong>Upcoming app features:</strong></span>
        <span className="about-steps"><strong>- </strong>Ping seller button and notifications on account page</span>
        <span className="about-steps"><strong>- </strong>Instant chat</span>
        <span className="about-steps"><strong>- </strong>Sort gear ads via tabs by type</span>
        <span className="about-steps"><strong>- </strong>Gear ad search functionality</span>
        <span className="about-steps"><strong>- </strong>Mobile app</span>
      </div>

      <div className="buttons-container">
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
        <button className="go-to-app-button">Go To App</button>
      </div>

    </div>
  )
}