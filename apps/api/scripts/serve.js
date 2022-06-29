const { spawn } = require('child_process');
const { copy, pathExists } = require('fs-extra');

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
    let initialBuildDone = false;
    // Run the following steps in parallel:
    const build = spawn(`nx`, ['run', 'api:build:watch']);

    build.stdout.on('data', async (e) => {
      const output = e.toString();
      console.log(output);
      if (output.includes('Watching for file changes') && !initialBuildDone) {
        initialBuildDone = true;
        const nodeModulesSource = 'apps/api/node_modules';
        const nodeModulesTarget = 'dist/apps/api/node_modules';

        const envSource = 'apps/api/.env';
        const envTarget = 'dist/apps/api/.env';

        const [
          nodeModulesSourceExists,
          nodeModulesTargetExists,
          envSourceExists,
        ] = await Promise.all([
          pathExists(nodeModulesSource),
          pathExists(nodeModulesTarget),
          pathExists(envSource),
        ]);
        // Moving node_modules, to save time
        if (!nodeModulesSourceExists) {
          throw new Error(
            `${nodeModulesSource} does not exist as a source, ` +
              'run npm install in apps/api'
          );
        }

        if (!envSourceExists) {
          throw new Error(
            `${envSource} does not exist as a source ` +
              ' please create one otherwise the functions will fail to run'
          );
        }

        if (nodeModulesTargetExists) {
          console.log('>> node_modules already exists, skipping');
        } else {
          console.log('>> copying node_modules...');
          await copy(nodeModulesSource, nodeModulesTarget);
          console.log('>> done copying node_modules');
        }

        // Always move the .env file as it could of been updated.
        console.log('>> copying .env...');
        await copy(envSource, envTarget);
        console.log('>> done copying .env');

        console.log('>> copying libraries...');
        // Moving lib dependencies into node_modules so they are
        // correctly loaded.
        const libs = ['apod-common', 'common'];
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
      }
    });

    build.stderr.on('data', (e) => {
      console.error('' + e);
    });

    build.on('error', (err) => {
      throw err;
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
