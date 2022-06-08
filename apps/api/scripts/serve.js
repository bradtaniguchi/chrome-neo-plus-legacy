const { spawn } = require('child_process');

/**
 * This helper script is used to manage the 2 main tasks that need to be
 * performed to correctly run the API project with the correct emulators.
 *
 * - build and watch for TS changes
 * - run the actual firebase emulators
 */
try {
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
