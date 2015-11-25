'use strict';

var async = require('async');

var cloneRepo = require('./clone-repo');

var tasks = [
  cloneRepo
];

async.series(tasks, function(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});
