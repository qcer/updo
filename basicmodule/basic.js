var fs = require('fs');
var getFileinfos = function (filePath) {
  // body...
  var fileInfos = [];
  var fileTmpInfos = fs.readdirSync(filePath);
  var fileCount = fileTmpInfos.length;
  var ele = null;
  for (let i = 0; i < fileCount; i++) {
    ele = fs.statSync(filePath+fileTmpInfos[i]);
    fileInfos[i] = {
      valueof: ele.ctime.valueOf(),
      file_name: fileTmpInfos[i],
      file_size: ele.size,
      file_latest_ch: ele.ctime.toLocaleString()
    };
  }
  fileInfos.sort(function (v1,v2) {
    // body...
    return v2.valueof - v1.valueof;
  });
  return fileInfos;
}
module.exports.getFileinfos = getFileinfos