'use strict';

var fs = require('fs-extra');
var path = require('path');
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

module.exports = getLocales;

function getLocales(cb) {
  var resource = 'https://api.phraseapp.com/api/v2/projects/' + projectId + '/locales/';
  request
  .get(resource, getLocalesCallback.bind(null, cb))
  .auth(clientId, clientSecret)
  .on('error', function(err) {
    throw err;
  });
}


function getLocalesCallback(cb, err, res, body) {
  if (err || res.statusCode !== 200) {
    console.error(res.statusCode);
    console.error(body);
    throw err;
  }

  var content = JSON.parse(body);


  fs.mkdirsSync('./data');
  var file = path.join(__dirname, 'data', 'locales.json');
  var fileContent = JSON.stringify(content, null, 2);
  fs.writeFileSync(file, fileContent);

  cb();
}

