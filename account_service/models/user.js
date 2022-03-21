const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, trim: true, required: true },
  username: {
    min: 6,
    max: 20,
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: { type: String, trim: true },
  events: [],
});

/**
 * Password hash middleware.
 */

userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      return next();
    });
    return null;
  });
  return null;
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
