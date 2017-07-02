var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  bodyParser = require('body-parser'),
  multiparty = require('multiparty'),
  util = require('util');

module.exports = function (app) {
  app.use('/', router);
};


function getText() {
	// body...
	return fs.readFileSync("./freedom/hidden/whiteboard.txt").toString().split(/\r\n/);
}

router.get('/whiteboard.html', function (req, res, next) {
	var text = getText();
	res.render('pages/whiteboard',{
		text: text,
	});
});


router.get('/whiteboard_ajax.html', function (req, res, next) {
	res.send(getText()); //text为数组,后台只负责传输数据
});


router.post('/whiteboard.html', function (req, res) {
	fs.writeFileSync("./freedom/hidden/whiteboard.txt", req.body.text, 'utf8');
	res.send(getText()); //text为数组,后台只负责传输数据
});


router.post('/whiteboard.html',function (req, res) {
	// body...
	fs.writeFileSync("./freedom/hidden/whiteboard.txt", req.body.text, 'utf8');
	res.redirect('/whiteboard.html');
});