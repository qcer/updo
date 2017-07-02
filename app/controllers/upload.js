var express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  multiparty = require('multiparty'),
  util = require('util'),
  fs = require('fs');

const UPLOADPATH = "./freedom/upload/";

module.exports = function (app) {
  app.use('/', router);
};

router.post('/upload.html', function (req,res) {
	
	// 解析一个文件上传
	var form = new multiparty.Form({uploadDir: UPLOADPATH});
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
		var fileName = (files.file[0]).originalFilename;
		var filePath = (files.file[0]).path;
		var newFilePath = UPLOADPATH+fileName;
		//同步重命名文件名
	   	fs.renameSync(filePath,newFilePath);
	   	res.render('pages/upload',{});
		}
  	});
});


