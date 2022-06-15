const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * This helper script is used to manage the different build steps
 * required to setup the `api` project to be deployed to Firebase functions.
 */
(async () => {
  try {
    console.log('>> building api...');
    await exec('nx run api:build');
    console.log('>> built api');
    // TODO:
    // 1. update package.json with local files
    // https://firebase.google.com/docs/functions/handle-dependencies#including_local_nodejs_modules
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
