import React from 'react';
import './about.css';

export default function About(props) {
    return (
        <div className="about-container">
            <label className="about-label">About this app</label>
            <span className="about-info">Musixchange is an app to help you buy or sell music and audio gear in the greater Phoenix area.</span>
        </div>
    )
}