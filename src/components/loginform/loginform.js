import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';

import './loginform.css';
import { storeAuthInfo } from '../../actions/auth';
import { AuthServices } from '../../services/api';

export class Loginform extends React.Component {
  state = {
    error: false,
  };

  _handleSubmit = (values, bag) => {
    AuthServices.login(values)
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
    if (this.state.error) {
      return <h1>Something went wrong</h1>;
    }
    return (
      <div className="form-container">

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
            username: '',
            password: '',
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
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    className="single-input"
                    onChange={handleChange}
                    // error={errors.username && touched.username}
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
                  // error={errors.password && touched.password}
                  />
                  {errors.password &&
                    touched.password && (
                      <div className="error-messages">{errors.password}</div>
                    )}
                  <button
                    className="submit blue push_button"
                    disabled={!isValid}
                  // loading={isSubmitting}
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

export default Loginform;
