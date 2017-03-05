var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  bodyParser = require('body-parser'),
  multiparty = require('multiparty'),
  util = require('util'),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/delete.html', function (req, res, next) {
	console.log("ok");
	var file_name = req.query.file_name;
	var path = "./freedom/upload/"+file_name;
	console.log(path);
	fs.unlinkSync(path);
	res.redirect('/index.html');
});

