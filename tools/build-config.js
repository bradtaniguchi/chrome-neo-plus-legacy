const { promises: fs } = require('fs');
const { readFile, writeFile, stat, mkdir } = fs;
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

/**
 * This script creates a dist/config.json file with some basic git meta-data.
 * Useful to debug builds.
 *
 * This should only be executed within a github-actions workflow, as the it provides
 * the necessary environment variables.
 *
 * Run with:
 * ```
 * npm run build:config
 * ```
 *
 * Pass -- --path to change the path, otherwise defaults to dist/config.json
 */
(async () => {
  try {
    const path = argv.path ?? 'dist/config.json';
    console.log('>> ', argv);
    const [version] = await Promise.all([
      readFile('package.json')
        .then(JSON.parse)
        .then(({ version }) => version),
      stat('dist')
        .then((fsStat) => {
          if (!fsStat.isDirectory())
            throw new Error(
              'dist is not a folder, cannot continue, run npm run clean'
            );
          return true;
        })
        .catch((err) => {
          if (err.code === 'ENOENT') return mkdir('dist');
          throw err;
        }),
    ]);

    await writeFile(
      path ?? 'dist/config.json',
      JSON.stringify(
        (() => {
          const common = {
            version,
            sha: process.env.GITHUB_SHA ?? '',
            ref_type: process.env.GITHUB_REF_TYPE ?? '',
          };
          if (process.env.GITHUB_REF_TYPE === 'branch')
            return {
              ...common,
              branch: process.env.GITHUB_REF ?? '',
            };
          // Fallback just return tag, as branch release models usually are used.
          return {
            ...common,
            tag: process.env.GITHUB_REF ?? '',
          };
        })(),
        null,
        2
      )
    );
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
