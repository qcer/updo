var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'updo'
    },
    port: process.env.PORT || 8421,
    // db: 'mysql://root:root@localhost/test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'updo'
    },
    port: process.env.PORT || 3000,
    // db: 'mysql://localhost/updo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'updo'
    },
    port: process.env.PORT || 3000,
    // db: 'mysql://localhost/updo-production'
  }
};

module.exports = config[env];
