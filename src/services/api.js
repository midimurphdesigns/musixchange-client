const baseUrl = 'http://localhost:8080/api';

export const Fetch = (path, method = 'GET', data = undefined) => {
  const token = AuthServices.getToken();
  let headers;

  if (token) {
    headers = {
      authorization: `Bearer ${token}`
    }
  }

  return fetch(`${baseUrl}/${path}`, {
    method,
    body: JSON.stringify(data)
  }).then(res => {
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const AdsServices = {
  basePath: 'ads',

  getAds() {
    return Fetch(this.basePath);
  },

  createAds(name) {
    return Fetch(this.basePath, 'POST', { name });
  },

  deleteAd(id) {
    return Fetch(`${this.basePath}/${id}`)
  },

  getAd(id) {
    return Fetch(`${this.basePath}/${id}`)
  },

  updateAd(id, name) {
    return Fetch(`${this.basePath}/${id}`, 'PUT', { name })
  }
};

const UserServices = {

}

const AuthServices = {
  tokenName: '@facebook/token',
  token: null,

  getToken() {
    if (this.token) {
      return this.token;
    }
    this.token = localStorage.getItem(this.tokenName);

    return this.token
  },

  saveToken(token) {
    this.token = token;
    return localStorage.setItem(this.tokenName, token);
  },

  login(email, password) {
    const path = 'login'

    return Fetch(path, 'POST', { email, password }).then(res => {
      if (res.token) {
        this.saveToken(token)
      }

      return res;
    })
  },
}

class App extends Component {
  state = { error: null, ads: [] }

  componentDidMount() {
    this._fetchAds()
  }

  _fetchAds = () => {
    AdsServices.getAds().then(res => this.setState({ ads: res })).catch(error => this.setState({ error }))
  }
  render() {
    if (this.state.error) {
      return (
        
      );
    }
  }
  
  export default App;






  export const signupUser = (userData) => (dispatch) => {
    dispatch({ type: 'SIGNUP_REQUEST' });

    AuthServices.signup(userData).then(res => {
      dispatch({ type: 'SIGNUP_SUCCESS', data: res.user })
    }).catch(error => ({
      dispatch({ type: 'SIGNUP_ERROR', error })
    }))
  }
}