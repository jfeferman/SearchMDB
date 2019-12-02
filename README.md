# SearchMDB

[![react](https://img.shields.io/badge/built%20with-react-61dafb.svg)](https://reactjs.org/)

The Search MDB is a web application to query the Movie Database. https://www.themoviedb.org/

The search will return a general query 

This document provides useful information for developers who need to install or update the application.

## System architecture

The front end is structured by grouping progressively more complex components, in the following order:

 - atoms: atomic components that are the simplest units of UI
 - molecules: groups of atoms
 - organisms: groups of molecules
 - pages: groups of organisms, representing a full page or route.

This structure allows component reuse and to easily compose multiple views.

The front end contains a form that allows the user to query the Movie MDB via `GET` requests to the provided api https://developers.themoviedb.org/3/getting-started/introduction.


## Setting up the development environment

1. Setup your preferred editor/IDE. I use Visual Studio Code with the ESLint extension, but any NodeJS compatible environment will do.

1. Install `node` version >= 10.0.0 and `npm` version >= 6.0.0. I recommend using `nvm` (Mac OS: `brew install nvm; nvm install 10; nvm use 10`).

## Installing and running the application

From the Mac OS terminal or most other UNIX-based command lines, follow the steps below.

1. Clone the respository `git clone https://github.com/jfeferman/SearchMDB.git` 

1. Move into the application folder `cd SearchMDB`

1. Download and unzip the environment varaibles files into the root folder. The zip and/or files can be obtained by the project maintainer. **DO NOT check these files into any publically accessible location.** Also note that the contents of the zip file are all "dot-files" so may not be visible to the default filesystem browser.

1. Install all packages `./bootstrap.sh`

1. Start the application `./start.sh`

This will bootstrap the application architecture, install the necessary modules, and start the local instances of the application. Now point your browser to http://localhost:3000/.

## Test infrastructure and running tests

The test infrastructure is based on `jest` and `react-test-renderer`. Testing is wired to code and css linting configurations, such that tests will fail if there are any linting errors.

From a terminal, the following scripts are available in the project root.

 - `npm run test` runs all unit tests once
 - `npm run test:watch` runs unit tests interactively (currently not functional)
 - `npm run test:coverage` builds a test coverage report in `/coverage`. Open `/coverage/Icov-report/index.html` to view an html version of the generated report.

 ## TODO and wishlist

  - Fix interactive test runner. `npm run test:watch` is not working.
  - Abstract api calls to the Movie DB. Currently only a multi query is integrated.
  - Handle pagination of query results. The Movie DB already provides parameters to query results per page.
  - Reason about and substitute react context provider for container ioc pattern.
  - Improve results cards layout, add images, link to a modal dialog with more complete information.
  - Improve test coverage.

