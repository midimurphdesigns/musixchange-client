import { loadAuthToken } from '../local-storage';
import { API_BASE_URL } from '../config';

let token;

const getToken = () => {
  if (token != null) {
    return;
  }
  token = loadAuthToken();
};

export const Fetch = (path, method = 'GET', data = undefined) => {
  getToken();

  let headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(`${API_BASE_URL}/${path}`, {
    method,
    body: JSON.stringify(data),
    headers,
  }).then(res => {
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    if (method !== 'DELETE') {
      return res.json();
    }
  });
};

export const AuthServices = {
  basePath: 'auth',

  login(data) {
    return Fetch(`${this.basePath}/login`, 'POST', data);
  },

  logout() {
    token = null;
  },

};

export const AdsServices = {
  basePath: 'ads',

  getAds() {
    return Fetch(this.basePath);
  },

  getMyAds() {
    return Fetch(`${this.basePath}/me`);
  },

  createAds(data) {
    return Fetch(this.basePath, 'POST', data);
  },

  deleteAd(id) {
    return Fetch(`${this.basePath}/${id}`, 'DELETE');
  },

  getAd(id) {
    return Fetch(`${this.basePath}/${id}`);
  },

  updateAd(id, data) {
    return Fetch(`${this.basePath}/${id}`, 'PATCH', data);
  },
};

export const UserServices = {
  basePath: 'users',

  getMe() {
    return Fetch(`${this.basePath}/me`);
  },
};
