import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { connect } from 'react-redux';

import './postform.css';
import { PostsServices } from '../../services/api';
import Input from '../../commons/Input';

const FORMS = [
  {
    name: 'image',
    placeholder: 'Image url',
  },
  {
    name: 'title',
    placeholder: 'Title',
  },
  {
    name: 'description',
    placeholder: 'Description',
  },
  {
    name: 'condition',
    placeholder: 'Condition',
  },
  {
    name: 'price',
    placeholder: 'Price',
    type: 'number',
  },
];

export class Postform extends React.Component {
  state = {
    error: false,
  };

  _handleSubmit = (values, bag) => {
    PostsServices.createPosts(values)
      .then(() => {
        this.props.redirect();
      })
      .catch(err => {
        bag.setSubmitting(false);
        this.setState({ error: true });
      });
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong</h1>
        </div>
      );
    }
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
                <h1 className='post-form-title'>Post an ad for your gear</h1>
                <form onSubmit={handleSubmit}>
                  {FORMS.map(el => (
                    <Input
                      {...el}
                      key={el.name}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      className="single-input"
                      error={errors[el.name]}
                      touched={touched[el.name]}
                    />
                  ))}
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

export default connect()(Postform);
