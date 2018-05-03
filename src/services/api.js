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

  updateAd(id, name) {
    return Fetch(`${this.basePath}/${id}`, 'PUT', { name });
  },
};

export const UserServices = {
  basePath: 'users',

  getMe() {
    return Fetch(`${this.basePath}/me`);
  },
};

// const AuthServices = {
//   tokenName: '@facebook/token',
//   token: null,

//   getToken() {
//     if (this.token) {
//       return this.token;
//     }
//     this.token = localStorage.getItem(this.tokenName);

//     return this.token
//   },

//   saveToken(token) {
//     this.token = token;
//     return localStorage.setItem(this.tokenName, token);
//   },

//   login(email, password) {
//     const path = 'login'

//     return Fetch(path, 'POST', { email, password }).then(res => {
//       if (res.token) {
//         this.saveToken(token)
//       }

//       return res;
//     })
//   },
// }

// class App extends Component {
//   state = { error: null, ads: [] }

//   componentDidMount() {
//     this._fetchAds()
//   }

//   _fetchAds = () => {
//     AdsServices.getAds().then(res => this.setState({ ads: res })).catch(error => this.setState({ error }))
//   }
//   render() {
//     if (this.state.error) {
//       return (

//       );
//     }
//   }

//   export default App;

//   export const signupUser = (userData) => (dispatch) => {
//     dispatch({ type: 'SIGNUP_REQUEST' });

//     AuthServices.signup(userData).then(res => {
//       dispatch({ type: 'SIGNUP_SUCCESS', data: res.user })
//     }).catch(error => ({
//       dispatch({ type: 'SIGNUP_ERROR', error })
//     }))
//   }
// }
