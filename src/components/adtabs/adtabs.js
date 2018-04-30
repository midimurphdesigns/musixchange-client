import React from 'react';
import './adtabs.css';

export default function Adtabs(props) {
    return (
        <div className="adtabs-container">
            <label className="adtabs-first-tab">All</label>
            <label className="adtabs">Electric Guitars</label>
            <label className="adtabs">Acoustic Guitars</label>
            <label className="adtabs">Bass Guitars</label>
            <label className="adtabs">Other</label>
        </div>
    )
}