import { PostsServices } from '../services/api';

export const EXTRACT_POST_FORM_REQUEST = 'EXTRACT_POST_FORM_REQUEST';
export const EXTRACT_POST_FORM_SUCCESS = 'EXTRACT_POST_FORM_SUCCESS';
export const EXTRACT_POST_FORM_ERROR = 'EXTRACT_POST_FORM_ERROR';

export const fetchPosts = () => dispatch => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' });
  PostsServices.getPosts()
    .then(res => {
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res });
    })
    .catch(error => {
      dispatch({ type: 'FETCH_POSTS_ERROR', error });
    });
};

export const extractPostForm = formData => dispatch => {
  dispatch(extractPostFormRequest());
  return fetch('http://localhost:8080/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(extractPostFormSuccess(data)))
    .catch(err => dispatch(extractPostFormError(err)));
};

export const extractPostFormSuccess = data => {
  return {
    type: EXTRACT_POST_FORM_SUCCESS,
    data,
  };
};

export const extractPostFormRequest = () => {
  return {
    type: EXTRACT_POST_FORM_REQUEST,
  };
};

export const extractPostFormError = error => {
  return {
    type: EXTRACT_POST_FORM_ERROR,
    error,
  };
};
