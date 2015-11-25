'use strict';

var fs = require('fs-extra');
var simpleGit = require('simple-git');
var config = require('./config');

var tmpFolder = './tmp';

module.exports = function(cb) {

  fs.removeSync(tmpFolder);
  fs.mkdirsSync(tmpFolder);

  simpleGit()
    .clone(config.gitCloneUrl, tmpFolder, cb);
};
