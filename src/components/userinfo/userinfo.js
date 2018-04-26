import React from 'react';
import './userinfo.css';

export default function UserInfo(props) {
    return (
        <div className="info-container">
          <label className="username">Username Goes Here</label>
          <section className="current-ads">Current ads go here</section>
          <section className="ping-notifications">Ping notifications go here</section>
        </div>
    )
}