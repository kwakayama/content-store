# Content Store

This application fetches the content from PhraseApp and persits it in its git repository.

### Setup

Create a `.env` file in the root of this repository.
The file should contain the environment variables specific for this application:

```
GIT_CLONE_URL=<GIT_CLONE_URL>
PHRASEAPP_CLIENT_ID=<PHRASEAPP_CLIENT_ID>
PHRASEAPP_CLIENT_SECRET=<PHRASEAPP_CLIENT_SECRET>
PHRASEAPP_PROJECT_ID=<PHRASEAPP_PROJECT_ID>
```

Edit `git-config` file with your git user name and email.

### Usage

```
$ npm start
```

### Sample output

If there are changes to be committed:

```
{ changes: '1', insertions: '5', deletions: 0 }
success!
```

If there are no changes:

```
Nothing to commit
success!
```