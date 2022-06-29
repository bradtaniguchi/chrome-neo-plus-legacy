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

There are 2 ways to build this project.
The main tsc compile based build, and the `build-prod` variant.

The `build-prod` script uses a nodejs script that will setup all the files
for a production deployment to firebase.

The "tsc build":

```bash
nx run api:build
```

The `build-prod` build:

```bash
nx run api:build-prod
```

The difference is `build-prod` will not only run `nx run api:build`, but also
setup the `dist/api` folder to be ready to be deployed to production environments.

### Environment variables

This library requires a `.env` file, this file should have only 1 variable:

`API_KEY`

This api key represents the NASA api key available here:
https://api.nasa.gov/

**For deployments make sure this `.env` file is at the path: `apps/api/.env`
relative to the project root.**

### Deployments

Deployment is handled by the firebase-cli, internally this can be called
with the following:

```bash
nx run api:deploy
```

or if this doesn't work, manually call it with:

```bash
firebase deploy --only functions
```
