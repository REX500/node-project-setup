'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
  UserRole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserRole',
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

const UserRoleSchema = mongoose.Schema({
  role: { type: String, required: true }
});

const UserRole = mongoose.model('UserRole', UserRoleSchema);

module.exports = {
  User,
  UserRole
};
