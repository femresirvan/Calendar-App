const User = require('../models/user');
const { issueJWT } = require('../utils/jwt');

const login = async (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return next({ status: 401, msg: 'could not found user' });
      }

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) {
          return next(err);
        }
        if (isMatch) {
          const tokenObject = issueJWT(user);
          const tokenWithoutBearer = tokenObject.token.substring(7);
          return res.status(200).json({
            success: true,
            token: tokenWithoutBearer,
            expiresIn: tokenObject.expires,
            name: user.name,
          });
        }
        return next({ status: 401, msg: 'you entered the wrong password' });
      });
    })
    .catch((err) => {
      next({ msg: err });
    });
};

const register = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    if (!result) return next({ status: 404, msg: 'Username or password are incorrect.' });
    const tokenObject = issueJWT(user);
    res.status(200).json({
      success: true,
      token: tokenObject.token,
      expiresIn: tokenObject.expires,
    });
  } catch (err) {
    next({ msg: err });
  }
};

const getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'You are successfully get your user informations!',
    user: {
      // eslint-disable-next-line no-underscore-dangle
      _id: req.user._id,
      name: req.user.name,
      username: req.user.username,
      password: req.user.password,
    },
  });
};

module.exports = {
  login,
  register,
  getUser,
};
