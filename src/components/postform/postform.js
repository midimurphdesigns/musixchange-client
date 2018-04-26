import React from 'react';
import './postform.css';

export default function Postform(props) {
    return (
        <div className="form-container">
          <label className="form-title">Post an ad for your music gear</label>
          <form className="form-input">
            Title:
            <input type="text" name="title" />
            Image:
            <input type="text" name="image" />
            Instrument type:
            <input type="text" name="instrumentType" />
            Instrument name:
            <input type="text" name="instrumentName" />
            Condition:
            <input type="text" name="condition" />
            Description:
            <input type="text" name="description" />
            Price:
            <input type="text" name="price" />

            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}