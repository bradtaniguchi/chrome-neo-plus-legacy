const { spawn } = require('child_process');
const { copy, pathExists } = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * This helper script is used to manage the 3 main tasks that need to be
 * performed to correctly run the API project with the correct emulators.
 *
 * - build and watch for TS changes
 * - run the actual firebase emulators
 * - copy the node_modules into the correct "runtime" location within dist.
 */
(async () => {
  try {
    // Run an initial build to prepare the workspace
    console.log('>> running initial build...');
    await exec('nx run api:build');
    console.log('>> initial build done');

    const source = 'apps/api/node_modules';
    const target = 'dist/apps/api/node_modules';
    const [sourceExists, targetExists] = await Promise.all([
      pathExists(source),
      pathExists(target),
    ]);
    // Moving node_modules, to save time
    if (!sourceExists) {
      throw new Error(
        'apps/api/node_modules does not exist as a source, ' +
          'run npm install in apps/api'
      );
    }
    if (targetExists) {
      console.log('>> node_modules already exists, skipping');
    } else {
      console.log('>> copying node_modules...');
      await copy(source, target);
      console.log('>> done copying node_modules');
    }

    // Moving lib dependencies into node_modules so they are
    // correctly loaded.
    const libs = ['apod-common'];
    for (const lib of libs) {
      const source = `dist/libs/${lib}`;
      const target = `dist/apps/api/node_modules/@chrome-neo-plus/${lib}`;
      const [sourceExists, targetExists] = await Promise.all([
        pathExists(source),
        pathExists(target),
      ]);
      if (!sourceExists) {
        throw new Error(`${source} does not exists, cannot copy`);
      }
      if (targetExists) {
        console.log(`>> ${target} already exists, skipping`);
        continue;
      }
      console.log(`>> copying ${source} to ${target}`);
      await copy(source, target);
      console.log(`>> done copying ${source} to ${target}`);
    }

    // Run the following steps in parallel:
    const build = spawn(`nx`, [
      'run',
      'api:build',
      '--watch',
      '--generatePackageJson',
    ]);
    build.stdout.on('data', (e) => {
      console.log('' + e);
    });
    build.stderr.on('data', (e) => {
      console.error('' + e);
    });
    build.on('error', (err) => {
      throw err;
    });

    const emulatorsStart = spawn(`firebase`, [
      'emulators:start',
      '--only',
      'functions',
    ]);
    emulatorsStart.stdout.on('data', (e) => {
      console.log('' + e);
    });
    emulatorsStart.stderr.on('data', (e) => {
      console.error('' + e);
    });
    emulatorsStart.on('error', (err) => {
      throw err;
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
