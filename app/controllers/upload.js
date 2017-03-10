var express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  multiparty = require('multiparty'),
  util = require('util'),
  fs = require('fs'),
  db = require('../models');



var uploadDir = "./freedom/upload/";

module.exports = function (app) {
  app.use('/', router);
};

router.post('/upload.html', function (req,res) {
	
	// 解析一个文件上传
	var form = new multiparty.Form({uploadDir: uploadDir});
	//设置编辑
	form.encoding = 'utf-8';
	// //设置文件存储路径
	// form.uploadDir = "freedom/";
	//设置单文件大小限制 
	form.maxFilesSize = 100 * 1024 * 1024;
	//form.maxFields = 1000;  设置所以文件的大小总和
	form.parse(req, function(err, fields, files) {
		if (err) {
			console.log(err);
		}else{
		var file_name = (files.file[0]).originalFilename;
		var file_path = (files.file[0]).path;
		console.log(file_path);
		var new_file_path = uploadDir+file_name;
		console.log(new_file_path);
		//同步重命名文件名
	   	fs.renameSync(file_path,new_file_path);
	   	res.render('pages/upload',{});
		}
  	});
});


router.get('/upload.html', function (req, res, next) {
	var query_param = req.body;
	console.log(query_param);
	console.log("ok_get");
	res.render('pages/upload',{});
});


