const axios = require("axios");

const isAuthenticated = (req, res, next) => {
  axios
    .get("http://localhost:3000/api/users/me", {
      headers: {
        Authorization: req.headers.authorization,
      },
    })
    .then((response) => {
      req.user = response.data.user;
      return next();
    })
    .catch((error) => {
      return next({ msg: req.headers });
    });
};

module.exports = isAuthenticated;
