const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
  }, 
  currentGame: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
  },
  currentJob : {
    type: String,
    required: false,
    default: 'None',
  }
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

UserSchema.methods.checkPassword = async function(plainTextPW) {
  return await bcrypt.compare(plainTextPW, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;