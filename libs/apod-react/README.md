# apod-react

This library hosts APOD components and pages for React. See the `apod-common` library for more in-depth information.

## Running unit tests

Run `nx test apod-react` to execute the unit tests via [Jest](https://jestjs.io).

## Running storybook

This storybook requires the `api` project to provide `apod` api data from
the api locally. Because of that, you need to run the `api` server with:

```bash
npx nx run api:serve
```

Then to run storybook for this library use:

```bash
npx nx run apod-react:storybook
```

Failure to run the `api:serve` project will result in most of the `pages`
rendered within storybook to show an error.
