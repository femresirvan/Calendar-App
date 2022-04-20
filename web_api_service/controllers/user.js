const axios = require('axios');

const login = async (req, res, next) => {
  axios({
    method: 'post',
    headers: { 'content-type': 'application/json' },
    url: `http://${process.env.ACCOUNT_URL}:3000/auth/login/`,
    data: req.body,
  })
    .then((response) => {
      res
        .cookie('jwt', response.data.token, {
          httpOnly: true,
          secure: true,
          maxAge: 1000 * 60 * 60 * 23,
        })
        .json(response.data);
    })
    .catch((err) => {
      next({ msg: err });
    });
};
const register = async (req, res, next) => {
  axios({
    method: 'post',
    headers: { 'content-type': 'application/json' },
    url: `http://${process.env.ACCOUNT_URL}:3000/auth/register`,
    data: req.body,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      next({ msg: err });
    });
};

const logout = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      res.clearCookie('jwt').status(200).json({
        success: true,
        message: 'You have logged out successfully.',
      });
    } else {
      next({
        msg: 'Invalid jwt.',
        status: 401,
      });
    }
  } catch (err) {
    console.err(err);
    next({ msg: 'Server error!' });
  }
};

module.exports = {
  login,
  register,
  logout,
};
