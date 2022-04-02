const axios = require('axios');

const isAuthenticated = (req, res, next) => {
  axios
    .get('http://account_service:3000/api/users/me', {
      headers: {
        Authorization: req.headers.authorization,
      },
    })
    .then((response) => {
      req.user = response.data.user;
      return next();
    })
    .catch((error) => next({ msg: error }));
};

module.exports = isAuthenticated;
