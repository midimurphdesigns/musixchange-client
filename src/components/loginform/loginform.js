import React from 'react';
import { Formik } from "formik";
import Yup from "yup";

import './loginform.css';

const errorMsg = {
  password: "Invalid password",
  username: "Invalid username"
};

export default class SignupForm extends React.Component {
  _handleSubmit = (values, bag) => {
    console.log("values", values);

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
            // email: Yup.string()
            //   .email()
            //   .required("Dont forget to enter a valid email"),
            username: Yup.string()
              .min(3)
              .required("Don't forget to enter a valid username"),
            password: Yup.string()
              .min(6)
              .required("Don't forget to enter a valid password"),
            // confirmPassword: Yup.string()
            //   .oneOf([Yup.ref("password"), null])
            //   .required("Don't forget to confirm your password")
          })}
          initialValues={{
            // email: "",
            username: "",
            password: "",
            // confirmPassword: ""
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
                  {/* <input
                    className="single-input"
                    onChange={handleChange}
                    fluid
                    error={errors.email && touched.email}
                    name="email"
                    label="Email"
                    placeholder="Email here..."
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>} */}
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
                    touched.username && <div>{errors.username}</div>}
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
                    touched.password && <div>{errors.password}</div>}
                  {/* <input
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
                    touched.confirmPassword && <div>{errors.confirmPassword}</div>} */}
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
