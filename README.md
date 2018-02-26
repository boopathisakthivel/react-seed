# React seed

This project can be used as a seed for a React project.

## Table of Contents

- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build:dev](#npm-run-build-dev)
  - [npm run build:prod](#npm-run-build-prod)
  - [npm run lint:fix](#npm-run-lint-fix)
  - [npm run lint:log](#npm-run-lint-log)
  - [npm run precommit](#npm-run-precommit)
  - [npm run serve:dev](#npm-run-serve-dev)
  - [npm run serve:prod](#npm-run-serve-prod)
  - [npm run test](#npm-run-test)

## Dependencies

In order to install the dependencies needed by this project, run the following command from within the project directory:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Alias for `npm run serve:dev`.

### <a id="npm-run-build-dev"></a>`npm run build:dev`

Creates a development build of the app.\
The resulting build can be found in the directory "build_dev".

### <a id="npm-run-build-prod"></a>`npm run build:prod`

Creates a production build of the app.\
The resulting build can be found in the directory "build_prod".

### <a id="npm-run-lint-fix"></a>`npm run lint:fix`

Runs eslint on all files within the project, as specified in .eslintrc.json and .eslintignore.\
Fixes the problems found.

### <a id="npm-run-lint-log"></a>`npm run lint:log`

Runs eslint on all files within the project, as specified in .eslintrc.json and .eslintignore.\
Logs the results.

### `npm run precommit`

Runs all tests first, then runs in sequence prettier and eslint on all staged files (as defined in package.json in "lint-staged"), and fixes all probelms found.\
It is run automatically by husky on `git commit`.

### <a id="npm-run-serve-dev"></a>`npm run serve:dev`

Runs all tests, then builds and runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### <a id="npm-run-serve-prod"></a>`npm run serve:prod`

Runs all tests, then builds and runs the app in production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Finds all files with extension ".test.js" and ".test.jsx" within the project and runs the tests they contain.\