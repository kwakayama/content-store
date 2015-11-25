'use strict';

var async = require('async');

var cloneRepo = require('./clone-repo');
var getLocales = require('./get-locales');
var getContent = require('./get-content');
var persistContent = require('./persist-content');

var tasks = [
  cloneRepo,
  getLocales,
  getContent,
  persistContent
];

async.series(tasks, function(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});
