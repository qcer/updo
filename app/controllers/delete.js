var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  bodyParser = require('body-parser'),
  multiparty = require('multiparty'),
  util = require('util'),
  basic = require('../../basicmodule/basic.js');

module.exports = function (app) {
  app.use('/', router);
};

const DIRPATH = "freedom/upload/";

router.get('/delete.html', function (req, res, next) {
	var fileName = "./freedom/upload/" + req.query.file_name;
	fs.unlinkSync(fileName);
	res.redirect('/index.html');
});


router.post('/delete.html', function (req, res) {
  var fileName = "./freedom/upload/" + req.body.file_name;
  fs.unlinkSync(fileName);
  res.send(basic.getFileinfos(DIRPATH));
});

router.post('/deleteall.html', function (req, res) {
    var fileList = fs.readdirSync(DIRPATH);
    var fileCount = fileList.length;
    for(let i=0;i<fileCount;i++){
      fs.unlinkSync(DIRPATH+fileList[i]);
    }
    res.end();
});


