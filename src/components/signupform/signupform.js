import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { connect } from 'react-redux';

import './signupform.css';
import { registerUser } from '../../actions/users';
import { login } from '../../actions/auth';

const errorMsg = {
  password: 'Invalid password',
  username: 'Invalid username',
};

export class SignupForm extends React.Component {
  onSubmit(values) {
    const { username, password, email } = values;
    const user = { username, password, email };
    console.log(this.props);
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  _handleSubmit = (values, bag) => {
    this.onSubmit(values);

    setTimeout(() => {
      bag.setSubmitting(false);

      Object.keys(errorMsg).forEach(key => {
        bag.setFieldError(key, errorMsg[key]);
      });
    }, 2000);
  };
  render() {
    return (
      <div className="form-container">
        <h1>Signup</h1>

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
              .oneOf([Yup.ref('password'), null])
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
              <form onSubmit={handleSubmit}>
                <input
                  className="single-input"
                  onChange={handleChange}
                  fluid
                  error={errors.email && touched.email}
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
                  fluid
                  error={errors.username && touched.username}
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
                  fluid
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password here"
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                />
                {errors.password &&
                  touched.password && (
                    <div className="error-messages">{errors.password}</div>
                  )}
                <input
                  type="password"
                  className="single-input"
                  onChange={handleChange}
                  fluid
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  onBlur={handleBlur}
                  error={errors.confirmPassword && touched.confirmPassword}
                />
                {errors.confirmPassword &&
                  touched.confirmPassword && (
                    <div className="error-messages">
                      {errors.confirmPassword}
                    </div>
                  )}
                <button
                  className="single-input blue"
                  disabled={!isValid}
                  loading={isSubmitting}
                >
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
