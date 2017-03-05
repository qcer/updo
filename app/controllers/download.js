var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/download', function (req, res, next) {
	var query_param = req.query;
	if(query_param != undefined){
		console.log(query_param.file_name);
		res.download('freedom/upload/'+query_param.file_name);
	}
});
