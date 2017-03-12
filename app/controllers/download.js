var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/download.html', function (req, res, next) {
	var query_param = req.query;
	console.log(query_param);
	if(query_param != undefined){
		res.download('freedom/upload/'+query_param.file_name);
	}
});



router.post('/download.html', function (req, res) {
	var query_param = req.body.file_name;
	console.log(query_param);
	if(query_param != undefined){
		res.download('freedom/upload/'+query_param);
	}
});
