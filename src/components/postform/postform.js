import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { connect } from 'react-redux';

import './postform.css';
import { extractPostForm } from '../../actions/adActions';
import { AdsServices } from '../../services/api'

const errorMsg = {
  password: 'Invalid password',
  username: 'Invalid username',
};

export class Postform extends React.Component {
  _handleSubmit = (values, bag) => {
    AdsServices.createAds(values).then(() => {
      this.props.redirect()
    })
  };

  render() {
    return (
      <div className="form-container">

        <Formik
          validationSchema={Yup.object().shape({
            image: Yup.string()
              // .email()
              .required('Dont forget a link to an image of your gear'),
            title: Yup.string()
              .min(10)
              .required("Don't forget to enter a title for your ad"),
            description: Yup.string()
              .min(15)
              .required("Don't forget to enter a description of your gear"),
            instrumentType: Yup.string().required(
              "Don't forget to enter the type of your gear",
            ),
            instrumentName: Yup.string().required(
              "Don't forget to enter the make and model of your gear",
            ),
            condition: Yup.string().required(
              "Don't forget to enter the condition of your gear",
            ),
            price: Yup.string().required(
              "Don't forget to enter your asking price",
            ),
          })}
          initialValues={{
            image: '',
            title: '',
            description: '',
            instrumentType: '',
            instrumentName: '',
            condition: '',
            price: '',
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
                <h1>Post an ad for your gear</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    className="single-input"
                    onChange={handleChange}
                    // error={errors.image && touched.image}
                    name="image"
                    label="Image"
                    placeholder="Image URL"
                    onBlur={handleBlur}
                  />
                  {errors.image &&
                    touched.image && (
                      <div className="error-messages">{errors.image}</div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    // error={errors.title && touched.title}
                    name="title"
                    label="title"
                    placeholder="Title for ad"
                    onBlur={handleBlur}
                  />
                  {errors.title &&
                    touched.title && (
                      <div className="error-messages">{errors.title}</div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    // fluid
                    name="description"
                    label="description"
                    placeholder="Description of gear"
                    onBlur={handleBlur}
                  // error={errors.description && touched.description}
                  />
                  {errors.description &&
                    touched.description && (
                      <div className="error-messages">{errors.description}</div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    name="instrumentType"
                    label="Type of gear"
                    placeholder="Type of gear"
                    onBlur={handleBlur}
                  // error={errors.instrumentType && touched.instrumentType}
                  />
                  {errors.instrumentType &&
                    touched.instrumentType && (
                      <div className="error-messages">
                        {errors.instrumentType}
                      </div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    name="instrumentName"
                    label="Make and model"
                    placeholder="Make and model"
                    onBlur={handleBlur}
                  // error={errors.instrumentName && touched.instrumentName}
                  />
                  {errors.instrumentName &&
                    touched.instrumentName && (
                      <div className="error-messages">
                        {errors.instrumentName}
                      </div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    name="condition"
                    label="Condition"
                    placeholder="Condition"
                    onBlur={handleBlur}
                  // error={errors.condition && touched.condition}
                  />
                  {errors.condition &&
                    touched.condition && (
                      <div className="error-messages">{errors.condition}</div>
                    )}
                  <input
                    className="single-input"
                    onChange={handleChange}
                    name="price"
                    label="Price"
                    placeholder="Price"
                    onBlur={handleBlur}
                  // error={errors.price && touched.price}
                  />
                  {errors.price &&
                    touched.price && (
                      <div className="error-messages">{errors.price}</div>
                    )}
                  <button
                    className="submit blue push_button"
                    disabled={!isValid}
                  >Submit</button>
                </form>
              </div>
            )}
        />
      </div>
    );
  }
}

export default connect()(Postform);
