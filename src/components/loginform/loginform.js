import React from 'react';
import './loginform.css';

export default function LoginForm(props) {
    return (
        <div className="form-container">
          <label className="form-title">Login and begin posting ads</label>
          <form className="form-input">
            Username:
            <input type="text" name="username" />
            Password:
            <input type="text" name="password" />

            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}