# chrome-extension

This project is the "main" project used to manage the actual building/deployment/testing
of the chrome-extension version of the chrome-neo-plus project.

Most of the actual application code will be defined within libraries and only loaded
here to combine them into a single deployable application.

## Local Development notes

Developing chrome-extensions locally requires a few extra considerations.
See these docs for more details:
https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked

Otherwise, running the normal build command:

```
nx run chrome-extension:build
```

will build a production version of the extension automatically. The produced
folder can then be loaded up as an unpacked chrome extension (see above on use)
