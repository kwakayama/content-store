'use strict';

var async = require('async');

var cloneRepo = require('./clone-repo');
var getLocales = require('./get-locales');

var tasks = [
  cloneRepo,
  getLocales
];

async.series(tasks, function(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});
