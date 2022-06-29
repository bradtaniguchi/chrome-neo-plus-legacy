const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { copy, pathExists, readFile, writeFile } = require('fs-extra');

/**
 * This helper script is used to manage the different build steps
 * required to setup the `api` project to be deployed to Firebase functions.
 */
(async () => {
  try {
    // **Note** update this if any of the `api` projects requires
    // new builds. This is required, otherwise the deployment/run
    // will fail
    const LIBS = ['apod-common', 'common'];
    const ERROR_PREFIX = '>> build.js ';

    console.log('>> running custom build script for api project');

    console.log('>> verifying nested node_module exists...');

    const nodeModulesExists = await pathExists('apps/api/node_modules');

    if (!nodeModulesExists) {
      console.log('>> nested node_modules not found, installing...');

      await exec('cd apps/api && npm install');

      console.log('>> nested node_modules installed');

      await exec('pwd');
    }

    console.log('>> nested node_modules exists, building api...');

    await exec('nx run api:build');

    console.log('>> finished building api');

    console.log('>> checking .env');

    const envSource = 'apps/api/.env';
    const envTarget = 'dist/apps/api/.env';

    const envExists = await pathExists(envSource);

    if (!envExists) {
      throw new Error(`${envSource} does not exist as a source `);
    }

    console.log('>> .env exists, copying ...');

    await copy(envSource, envTarget);

    console.log('>> done copying .env');

    console.log('>> moving libraries into dist/apps/api/libs');

    for (const lib of LIBS) {
      const source = `dist/libs/${lib}`;
      const target = `dist/apps/api/libs/${lib}`;
      const [sourceExists, targetExists] = await Promise.all([
        pathExists(source),
        pathExists(target),
      ]);
      if (!sourceExists) {
        throw new Error(
          `${ERROR_PREFIX}${source} does not exists, cannot copy`
        );
      }
      if (targetExists) {
        console.log(`>> ${target} already exists, skipping`);
        continue;
      }
      console.log(`>> copying ${source} to ${target}`);
      await copy(source, target);

      console.log(`>> done copying ${source} to ${target}`);
    }

    console.log('>> done moving libraries');

    console.log('>> updating package.json with local builds');

    const packageJson = JSON.parse(
      (await readFile('dist/apps/api/package.json')).toString()
    );

    console.log('>> verifying libraries');

    for (const lib of LIBS) {
      const exists =
        !!packageJson?.peerDependencies?.[`@chrome-neo-plus/${lib}`];
      console.log(`>> library: ${lib} exists in lib: `, exists);
      if (!exists) {
        throw new Error(
          `${ERROR_PREFIX}$@chrome-neo-plus/{lib} does not exist, as a peerDependency, cannot update`
        );
      }
      // update the value to be prefixed with `file:<relative-path>`
      // see: https://firebase.google.com/docs/functions/handle-dependencies#including_local_nodejs_modules
      packageJson.peerDependencies[
        `@chrome-neo-plus/${lib}`
      ] = `file:libs/${lib}`;
    }

    console.log('>> updated package.json, writing back to the file');

    await writeFile(
      'dist/apps/api/package.json',
      JSON.stringify(packageJson, null, 2)
    );

    // TODO: run sanity checks
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
