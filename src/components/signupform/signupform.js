import React from 'react';
import './signupform.css';

export default function SignupForm(props) {
    return (
        <div className="form-container">
          <label className="form-title">Create an account and begin posting ads</label>
          <form className="form-input">
            Username:
            <input type="text" name="username" />
            Email:
            <input type="text" name="email" />
            Password:
            <input type="text" name="password" />

            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}