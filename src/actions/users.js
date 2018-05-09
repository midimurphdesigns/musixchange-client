import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { UserServices } from '../services/api';

export const registerUser = user => dispatch => {
  console.log(user);
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          
        );
      }
    });
};

export const getUserInfo = () => dispatch => {
  UserServices.getMe().then(res => {
    dispatch({ type: 'GET_USER_INFO_SUCCESS', currentUser: res });
  });
};
