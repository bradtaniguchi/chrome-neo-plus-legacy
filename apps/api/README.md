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

**note** there are package.json scripts, but these are from the `firebase init functions`
and probably wont work correctly.

## Docs for developing google cloud functions

See:
https://firebase.google.com/docs/functions/get-started

### Serve-beta

Currently there is a serve beta script available via:

```
nx run api:serve-beta
```

This target leverages a nodejs script that spins up the build with the
watch flag and the emulators at the same time.

This should allow for live-reloads against the functions,
and allow for quicker development

**This is untested hence why its a beta**. Once its verified that changes
work as expected, then this will replace the current `serve` target.

### Running the emulator

To run the emulators manually then use:

```bash
firebase emulators:start
```

only specific emulators:

```bash
firebase emulators:start --only=functions,firestore
```

### Deployments

Deployments could be handled locally, to bypass any lengthy deployment
process made in github-actions. Documentation on this process will be provided,
and there will probably
be a script to allow for single-line deployments.
