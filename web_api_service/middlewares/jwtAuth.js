const axios = require('axios');
const cookieExtractor = require('../utils/cookie_extractor');

const isAuthenticated = (req, res, next) => {
  const tokenWithoutBearer = cookieExtractor(req);
  console.log(tokenWithoutBearer);
  const token = `Bearer ${tokenWithoutBearer}`;
  axios
    .get(`http://${process.env.ACCOUNT_URL}:3000/api/users/me`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      req.user = response.data.user;
      return next();
    })
    .catch((error) => next({ msg: error }));
};

module.exports = isAuthenticated;
