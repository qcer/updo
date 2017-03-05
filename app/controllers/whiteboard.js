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

var text = "";
function get_text() {
	// body...
	text = fs.readFileSync("./freedom/hidden/whiteboard.txt").toString().split(/\r\n/);
}

router.get('/whiteboard.html', function (req, res, next) {
	get_text();
	res.render('pages/whiteboard',{
		text: text
	});
});


router.get('/whiteboard_ajax.html', function (req, res, next) {
	get_text();
	res.send(text); //text为数组,后台只负责传输数据
});



router.post('/whiteboard.html',function (req, res) {
	// body...
	console.log(req.body.text);
	console.log(req.body);

	fs.writeFileSync("./freedom/hidden/whiteboard.txt", req.body.text, 'utf8');
	res.redirect('/whiteboard.html');
});