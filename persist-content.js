'use strict';

var fs = require('fs-extra');
var path = require('path');
var simpleGit = require('simple-git');
var config = require('./config');

var tmpFolder = path.join(__dirname, './tmp');

module.exports = function(cb) {
  var hasChanges = false;

  fs.copySync('./data', path.join(tmpFolder, 'data'));
  fs.copySync('./git-config', path.join(tmpFolder, '/.git/config'));

  simpleGit(tmpFolder)
    .add(path.join(tmpFolder, 'data'))
    .commit('Update content', function(err, stats) {
      if (err || !stats.commit) {
        console.log('Nothing to commit');
        return;
      }
      hasChanges = true;
    }).then(function() {
      if (hasChanges) {
        simpleGit(tmpFolder)
          .addRemote('origin', config.gitCloneUrl)
          .push('origin', 'master', cb);
        return;
      }
      cb();
    });
};

