# internal-client

This app is deployed to github pages, and is used to connect/display information regarding
the actual build.

## Note about internal-tooling

Since this project relies on "built" assets, to test parts of this out, run
the following commands to generate some of these assets and then serve them

```bash
npm run build:config
npm run build:nx-graph
npx http-server dist
```

These assets will be served via the prox.conf.json file automatically on serve.
