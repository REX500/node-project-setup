'use strict';
const HttpError = require('./../utils/http-error');
const models = require('./../db/models');
const jwtUtil = require('./../utils/jwtUtil');
const secret = process.env.SECRET_KEY;

function extractIp(req, res, next) {
  let logInfo = {};
  logInfo.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);
  logInfo.timestamp = req._startTime;
  req.logInfo = logInfo;
  next();
}

// tries to auth the user for given roles
// ...permittedRoles is a syntax that allows multiple string params (in our case)
// or just one. If we pass multiple it will store them inside an array
// if we pass just one it will be a string object (kinda)
function authorizeUser(...permittedRoles) {
  return async function(req, res, next) {
    // get jwt from headers or body
    const jwt = req.headers.authorization || req.body.authorization;
    // console.log(jwt);
    if (jwt === undefined) return res.status(401).json(new HttpError('Bad request', 'asdf', 400, 'no role defined'));

    // verify jwt token
    let verifiedJwt;
    try {
      verifiedJwt = await jwtUtil.verifyJwt(jwt, secret);
      // console.log(verifiedJwt);
    } catch (err) {
      // console.log(err);
    }
    // if verified
    if (verifiedJwt) {
      const userRoles = await models.userRoles.findOne({
        include: {
          model: models.users, as: 'users', required: true, where: {id: verifiedJwt.id}
        }
      });
      // if we have the user in db and his role
      if (userRoles.dataValues.users[0].dataValues) {
        if (permittedRoles.includes(userRoles.dataValues.role)) {
          return next();
        } else {
          return res.status(401).json({
            message: 'Unauthorized user for role: ' + verifiedJwt.role,
            role: verifiedJwt.role
          });
        }
      }
    } else {
      return res.json(new HttpError('Bad Request', 'Unauthorized user', 401));
    }
  };
}

module.exports = {
  extractIp: extractIp,
  authorizeUser: authorizeUser
};
