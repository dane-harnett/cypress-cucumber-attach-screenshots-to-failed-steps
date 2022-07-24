# cypress-cucumber-attach-screenshots-to-failed-steps

This is a `cypress plugin` that `automatically attaches screenshots to failed cucumber steps` so that they will appear on reports.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You are using [cypress](https://www.cypress.io/)
- You are using [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- You are using [multiple-cucumber-html-reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)

## Install

To install, follow these steps:

```bash
npm install --save-dev cypress-cucumber-attach-screenshots-to-failed-steps
```

## Using

To use, follow these steps:

Add the following to your `cypress/support/index.js` file:

```js
import { saveScreenShot } from 'cypress-cucumber-attach-screenshots-to-failed-steps';

// Put as a direct execution of after each method.
afterEach(saveScreenShot);

// OR call it on your execution or after each
afterEach(function() {
    // Do anything you need.
    saveScreenShot.call(this);
});
```

Project with tests for this library
https://github.com/samuelpampolini/cypress-cucumber-attach-screenshots-to-failed-steps-tests

## Contributing

To contribute, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## License

This is open source software [licensed as MIT](https://github.com/dane-harnett/cypress-cucumber-attach-screenshots-to-failed-steps/blob/main/LICENSE).
