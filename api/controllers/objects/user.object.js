'use strict';

class User {
  constructor(name, email, password, userRole) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._userRole = userRole;

    // getters
    this.getDetails = function() {
      return `${this._name}'s email is ${this._email}`;
    };
  }
}

module.exports = {
  User
};
