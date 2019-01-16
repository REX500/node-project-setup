'use strict';

const User = require('./../../lib/db/models/users').User;
const UserRole = require('./../../lib/db/models/users').UserRole;
const HttpError = require('./../../lib/utils/http-error');

const UserObject = require('./../objects/user.object').User;

const getUsers = async () => {
  let returnArray = [];

  const users = await User.find({}).populate('UserRole');

  // create user objects and return them
  for (let u of users) {
    const user = new UserObject(u.name, u.email, u.password, u.UserRole.role);

    let userDto = {
      user,
      special: user.getDetails()
    };

    returnArray.push(userDto);
  }
  return returnArray;
};

const createUser = async ({body}) => {
  // find user role
  const role = await findUserRole({role: body.role});
  if (!role) throw new HttpError('Bad Request', `Role ${body.role} doesn't exist!`, 400);

  const newUser = new User({
    name: body.name,
    email: body.email,
    password: body.password,
    UserRole: role._id
  });

  // return newUser.save();
  return true;
};

const createUserRole = async ({role}) => {
  const userRole = new UserRole({
    role
  });
  return userRole.save();
};

const findUserRole = async ({role}) => {
  return UserRole.findOne({role});
};

module.exports = {
  createUser,
  getUsers,
  createUserRole,
  findUserRole
};
