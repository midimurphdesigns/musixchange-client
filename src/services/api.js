import { loadAuthToken, clearAuthToken } from '../local-storage';
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
    console.log('res ----->', res);
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    if (res.status === 401) {
      clearAuthToken();
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
    clearAuthToken();
  },

};

export const PostsServices = {
  basePath: 'posts',

  getPosts() {
    return Fetch(this.basePath);
  },

  getMyPosts() {
    return Fetch(`${this.basePath}/me`);
  },

  createPosts(data) {
    return Fetch(this.basePath, 'POST', data);
  },

  deletePost(id) {
    return Fetch(`${this.basePath}/${id}`, 'DELETE');
  },

  getPost(id) {
    return Fetch(`${this.basePath}/${id}`);
  },

  updatePost(id, data) {
    return Fetch(`${this.basePath}/${id}`, 'PATCH', data);
  },
};

export const UserServices = {
  basePath: 'users',

  getMe() {
    return Fetch(`${this.basePath}/me`);
  },
};
