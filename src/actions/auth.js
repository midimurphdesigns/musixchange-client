import jwtDecode from 'jwt-decode';

import { normalizeResponseErrors } from './utils';
import { saveAuthToken } from '../local-storage';
import { AuthServices } from '../services/api';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken,
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH,
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser,
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error,
});

export const AUTH_WARNING = 'AUTH_WARNING';
export const authWarning = () => ({
  type: AUTH_WARNING,
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
export const storeAuthInfo = authToken => dispatch => {
  console.log('auth token ----->', authToken);
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return AuthServices.login({ username, password })
    .then(res => normalizeResponseErrors(res))
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
    });
};

// export const refreshAuthToken = () => (dispatch, getState) => {
//   dispatch(authRequest());
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/auth/refresh`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(({authToken}) => storeAuthInfo(authToken, dispatch))
//     .catch(err => {
//       dispatch(authError(err));
//       dispatch(clearAuth());
//       clearAuthToken(authToken);
//     });
// };
