'use strict';

const User = require('./../../lib/db/models/users').User;
const UserRole = require('./../../lib/db/models/users').UserRole;
const bcrypt = require('bcryptjs');
const HttpError = require('./../../lib/utils/http-error');

const addUser = async ({body}) => {
  if (!body) throw new HttpError('Bad request', 'No body provided', 400);

  let userRoleId;

  // if not ran first time
  const userRole = await UserRole.findOne({role: 'developer'});
  if (!userRole) {
    // if ran first time
    const newUserRole = new UserRole({
      role: 'developer'
    });
    const savedUserRole = await newUserRole.save();
    userRoleId = savedUserRole.id;
  } else userRoleId = userRole.id;

  const user = new User({
    name: body.name,
    email: body.email,
    password: body.password,
    createdAt: new Date(),
    updatedAt: new Date(),
    UserRole: userRoleId
  });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;

  return user.save();
};

module.exports = {
  addUser
};
