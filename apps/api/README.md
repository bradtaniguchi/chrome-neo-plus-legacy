# api

This app is design as a single project for **all** cloud functions deployed
to firebase. Even though splitting up each of the API calls into their own
library might make more sense, having them all in 1 place will be easier to
start with.

## Local Development Setup

This app has its own package.json, which includes firebase function related packages.

Run `npm install` to install these packages once within `apps/api` folder.

## Running this project

```bash
nx run api:serve
```

This will run a custom `serve.js` script that internally will manage
the build and serving steps with automatic reloads.

**note** there are package.json scripts, but these are from the `firebase init functions`
and probably wont work correctly.

## Docs for developing google cloud functions

See:
https://firebase.google.com/docs/functions/get-started

### Running the emulator

Generally you wont need to run the emulators manually, as the `serve` target
handles the task internally.

To run the emulators manually then use:

```bash
firebase emulators:start
```

only specific emulators:

```bash
firebase emulators:start --only=functions,firestore
```

### Building the project

```bash
nx run api:buld
```

Builds are currently **incomplete** and wont fully built all aspects of the cloud
functions that are to be deployed to google cloud firebase.

### Deployments

TBD...
