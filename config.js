'use strict';

require('dotenv').load({silent: true});

var GIT_CLONE_URL = process.env.GIT_CLONE_URL;
var PHRASEAPP_CLIENT_ID = process.env.PHRASEAPP_CLIENT_ID;
var PHRASEAPP_CLIENT_SECRET = process.env.PHRASEAPP_CLIENT_SECRET;
var PHRASEAPP_PROJECT_ID = process.env.PHRASEAPP_PROJECT_ID;

if (!GIT_CLONE_URL) {
  throw new Error('GIT_CLONE_URL must be set');
}

if (!PHRASEAPP_CLIENT_ID) {
  throw new Error('PHRASEAPP_CLIENT_ID must be set');
}

if (!PHRASEAPP_CLIENT_SECRET) {
  throw new Error('PHRASEAPP_CLIENT_SECRET must be set');
}

if (!PHRASEAPP_PROJECT_ID) {
  throw new Error('PHRASEAPP_PROJECT_ID must be set');
}

module.exports = {
  gitCloneUrl: GIT_CLONE_URL,
  phraseApp: {
    clientId: PHRASEAPP_CLIENT_ID,
    clientSecret: PHRASEAPP_CLIENT_SECRET,
    projectId: PHRASEAPP_PROJECT_ID
  }
};
