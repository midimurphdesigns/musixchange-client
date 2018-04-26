const baseUrl = 'http://localhost:8080/api';

export const Fetch = (path, method = 'GET', data = undefined) => {
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
};

// you're going to create user services as a new object similar to above