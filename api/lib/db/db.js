'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
let gracefulShutdown;

module.exports = function (dbUrl) {
  mongoose.Promise = require('q').Promise; // using the Q promise library for mongoose queries
  mongoose.connect(dbUrl, {useNewUrlParser: true});
  // CONNECTION EVENTS
  mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
  });
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
  });
  // CAPTURE APP TERMINATION / RESTART EVENTS
  // To be called when process is restarted or terminated
  gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected through ' + msg);
      callback();
    });
  };
  // For nodemon restarts
  process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
      process.kill(process.pid, 'SIGUSR2');
    });
  });
  // For app termination
  process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
      process.exit(0);
    });
  });

  return mongoose.connection;
};
