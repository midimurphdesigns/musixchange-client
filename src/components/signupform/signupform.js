import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { connect } from 'react-redux';

import './signupform.css';
import { storeAuthInfo } from '../../actions/auth';
import { AuthServices } from '../../services/api';

export class SignupForm extends React.Component {
  _handleSubmit = (values, bag) => {
    AuthServices.signup(values)
      .then(res => {
        bag.setSubmitting(false);
        this.props.dispatch(storeAuthInfo(res.authToken));
      })
      .catch(err => {
        bag.setSubmitting(false);
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <div className="form-container">
        <Formik
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Dont forget to enter a valid email'),
            username: Yup.string()
              .min(3)
              .required("Don't forget to enter a valid username"),
            password: Yup.string()
              .min(6)
              .required("Don't forget to enter a valid password"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required("Don't forget to confirm your password"),
          })}
          initialValues={{
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={this._handleSubmit}
          render={({
            handleSubmit,
            isSubmitting,
            handleChange,
            errors,
            touched,
            handleBlur,
            isValid,
          }) => (
              <div className="input-container">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    className="single-input"
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    placeholder="Email here..."
                    onBlur={handleBlur}
                  />
                  {errors.email &&
                    touched.email && (
                      <div className="error-messages">{errors.email}</div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    name="username"
                    label="Username"
                    placeholder="Username here..."
                    onBlur={handleBlur}
                  />
                  {errors.username &&
                    touched.username && (
                      <div className="error-messages">{errors.username}</div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password here"
                    onBlur={handleBlur}
                  />
                  {errors.password &&
                    touched.password && (
                      <div className="error-messages">{errors.password}</div>
                    )}
                  <input
                    type="password"
                    className="single-input"
                    onChange={handleChange}
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword &&
                    touched.confirmPassword && (
                      <div className="error-messages">
                        {errors.confirmPassword}
                      </div>
                    )}
                  <button className="submit blue push_button" disabled={!isValid}>
                    Submit
                </button>
                </form>
              </div>
            )}
        />
      </div>
    );
  }
}

export default connect()(SignupForm);
