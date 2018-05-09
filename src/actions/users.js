import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { UserServices, AuthServices } from '../services/api';
import { storeAuthInfo } from './auth';

export const registerUser = user => dispatch => {
  console.log(user);
  return AuthServices.signup(user)
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      console.log('====================================');
      console.log('error', err);
      console.log('====================================');
    });
};

export const getUserInfo = () => dispatch => {
  UserServices.getMe()
    .then(res => {
      dispatch({ type: 'GET_USER_INFO_SUCCESS', currentUser: res });
    })
    .catch(err => {
      console.log('====================================');
      console.log('error', err);
      console.log('====================================');
    });
};
