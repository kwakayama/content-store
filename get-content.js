'use strict';

var fs = require('fs');
var path = require('path');
var async = require('async');
var request = require('request');
var config = require('./config');

var clientId = config.phraseApp.clientId;
var clientSecret = config.phraseApp.clientSecret;
var projectId = config.phraseApp.projectId;

if (!clientId) {
  throw new Error('clientId must be specified');
}

if (!clientSecret) {
  throw new Error('clientSecret must be specified');
}

if (!projectId) {
  throw new Error('projectId must be specified');
}

module.exports = getContent;

var tasks = [];

function getContent(cb) {
  var locales = require('./data/locales.json');

  if (!locales) {
    throw new Error('locales must be specified');
  }

  locales.forEach(function(locale) {
    tasks.push(getContentByLocale.bind(null, locale));
  });

  async.series(tasks, function(err, results) {
    if (err) {
      throw (err);
    }

    cb();
  });
}

function getContentByLocale(locale, cb) {
  var resource = 'https://api.phraseapp.com/api/v2/projects/' + projectId + '/locales/' + locale.id + '/download?file_format=node_json';

  request
    .get(resource, getContentByLocaleCallback.bind(null, cb, locale))
    .auth(clientId, clientSecret);
}

function getContentByLocaleCallback(cb, locale, err, res, body) {
  if (err || res.statusCode !== 200) {
    console.error(body);
    throw err;
  }

  var content = JSON.parse(body);

  var file = path.join(__dirname, 'data', locale.code + '.json');
  var fileContent = JSON.stringify(content, null, 2);
  fs.writeFileSync(file, fileContent);

  cb();
}

