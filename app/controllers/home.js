var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  basic = require('../../basicmodule/basic.js');

module.exports = function (app) {
  app.use('/', router);
};

const DIRPATH = "freedom/upload/";

router.get('/',function (req, res, next) {
	// body...
	res.redirect('/index.html');

});

router.get(/^\/index$/,function (req, res, next) {
	// body...
	res.redirect('/index.html');
});


router.get('/index.html', function (req, res, next) {
	res.setHeader('Cache-Control',"max-age="+120);
	var expires = new Date();
	expires.setTime(expires.getTime()+120*1000);
	res.setHeader('Expires',expires.toGMTString());
	res.render('pages/index', {
		file_info: JSON.stringify(basic.getFileinfos(DIRPATH))
	});
});

router.post('/index.html',function (req, res) {
	// body...
	res.send(basic.getFileinfos(DIRPATH));
})