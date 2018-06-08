'use strict';

// Initiate env
require('dotenv').config();

const express = require('express');
const formData = require('express-form-data');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const HttpError = require('./api/lib/utils/http-error');
// routes
const apiv1 = require('./api/routes/router');

// INITIALIZE EXPRESS
let app = express();

const multipartyOptions = {
  autoFiles: true
};

// USING ENV FILE
app.locals.ENV = process.env.NODE_ENV;
app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';

// uncomment after placing your favicon in /public
app.disable('x-powered-by');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(cookieParser());
app.use(cors());

app.use('/api', apiv1);
// api(app)
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.'
}));

// handle errors we throw
app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    if (err.body) {
      return res.json(err.body);
    } else {
      return res.end(err.message);
    }
  } else {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = app;
