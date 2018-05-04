import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { connect } from 'react-redux';

import './EditForm.css';
import { extractPostForm } from '../../actions/postActions';
import { PostsServices } from '../../services/api';

const errorMsg = {
  password: 'Invalid password',
  username: 'Invalid username',
};

export class EditForm extends React.Component {
  _handleSubmit = (values, bag) => {
    PostsServices.updatePost(this.props.post.id, values).then(() => {
      this.props.redirect();
    });
  };

  render() {
    const { post } = this.props;
    return (
      <div className="form-container">
        {post && (
          <Formik
            validationSchema={Yup.object().shape({
              image: Yup.string()
                .required('Dont forget a link to an image of your gear'),
              title: Yup.string()
                .min(10)
                .required("Don't forget to enter a title for your post"),
              description: Yup.string()
                .min(15)
                .required("Don't forget to enter a description of your gear"),
              condition: Yup.string().required(
                "Don't forget to enter the condition of your gear",
              ),
              price: Yup.string().required(
                "Don't forget to enter your asking price",
              ),
            })}
            initialValues={{
              image: post.image,
              title: post.title,
              description: post.description,
              condition: post.condition,
              price: post.price,
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
              values,
            }) => (
                <div className="input-container">
                  <h1>Edit your post</h1>
                  <form onSubmit={handleSubmit}>
                    <p className="input-label">Image URL:</p>
                    <input
                      className="single-input"
                      onChange={handleChange}
                      name="image"
                      value={values.image}
                      label="Image"
                      placeholder="Image URL"
                      onBlur={handleBlur}
                    />
                    {errors.image &&
                      touched.image && (
                        <div className="error-messages">{errors.image}</div>
                      )}
                    <p className="input-label">Title for post:</p>
                    <input
                      className="single-input"
                      onChange={handleChange}
                      value={values.title}
                      name="title"
                      label="title"
                      placeholder="Title for post"
                      onBlur={handleBlur}
                    />
                    {errors.title &&
                      touched.title && (
                        <div className="error-messages">{errors.title}</div>
                      )}
                    <p className="input-label">Description of gear:</p>
                    <input
                      className="single-input"
                      onChange={handleChange}
                      // fluid
                      name="description"
                      value={values.description}
                      label="description"
                      placeholder="Description of gear"
                      onBlur={handleBlur}
                    // error={errors.description && touched.description}
                    />
                    {errors.description &&
                      touched.description && (
                        <div className="error-messages">{errors.description}</div>
                      )}
                    <p className="input-label">Condition:</p>
                    <input
                      className="single-input"
                      onChange={handleChange}
                      name="condition"
                      label="Condition"
                      value={values.condition}
                      placeholder="Condition"
                      onBlur={handleBlur}
                    // error={errors.condition && touched.condition}
                    />
                    {errors.condition &&
                      touched.condition && (
                        <div className="error-messages">{errors.condition}</div>
                      )}
                    <p className="input-label">Price:</p>
                    <input
                      className="single-input"
                      onChange={handleChange}
                      name="price"
                      label="Price"
                      placeholder="Price"
                      value={values.price}
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
                    >
                      Edit
                  </button>
                  </form>
                </div>
              )}
          />
        )}
      </div>
    );
  }
}

export default connect()(EditForm);
