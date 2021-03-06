'use strict';
const env = process.env;

exports.middleware = [ 'errorhandler', ];

exports.security = {
  csrf: {
    enable: false,
  },
};

exports.logger = {
  level: 'DEBUG',
  consoleLevel: 'INFO',
};

exports.static = {
  buffer: true,
  maxAge: 31536000,
};


exports.mongoose = {
  url: 'mongodb://' + env.DATABASE_MONGODB_USERNAME_PASSWORD + '@' + env.DATABASE_MONGODB_HOST_PORT + '/tomato-message',
  options: {},
};
