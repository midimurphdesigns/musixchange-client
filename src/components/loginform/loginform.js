import React from 'react';
import { Formik } from "formik";
import Yup from "yup";

import './loginform.css';
import { login } from '../../actions/auth';

const errorMsg = {
  password: "Invalid password",
  username: "Invalid username"
};

export default class SignupForm extends React.Component {

  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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

        <h1>Login</h1>

        <Formik
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .min(3)
              .required("Don't forget to enter a valid username"),
            password: Yup.string()
              .min(6)
              .required("Don't forget to enter a valid password"),
          })}
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={this._handleSubmit}
          render={({
            handleSubmit,
            isSubmitting,
            handleChange,
            errors,
            touched,
            handleBlur,
            isValid
          }) => (
              <div className="input-container">
                <form onSubmit={handleSubmit}>
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
                    touched.username && <div className="error-messages">{errors.username}</div>}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    fluid
                    name="password"
                    label="Password"
                    placeholder="Password here"
                    onBlur={handleBlur}
                    error={errors.password && touched.password}
                  />
                  {errors.password &&
                    touched.password && <div className="error-messages">{errors.password}</div>}
                  <button
                    className="single-input"
                    disabled={!isValid}
                    loading={isSubmitting}
                  >Submit</button>
                </form>
              </div>
            )}
        />
      </div>
    );
  }
}
