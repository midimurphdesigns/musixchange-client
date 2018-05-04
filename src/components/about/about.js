import React from 'react';
import './about.css';

export default function About(props) {
    return (
        <div className="about-container row">
            <label className="about-label">About this app</label>
            <span className="about-info">Musixchange is an app to help you buy or sell music and audio gear in the greater Phoenix area.</span>
            <span className="about-steps"><strong>1) </strong>Signup or login</span>
            <span className="about-steps"><strong>2) </strong>Make a post</span>
            <span className="about-steps"><strong>3) </strong>View your post on the for sale page</span>
            <span className="about-steps"><strong>4) </strong>Edit or delete your post on the account page</span>
        </div>
    )
}