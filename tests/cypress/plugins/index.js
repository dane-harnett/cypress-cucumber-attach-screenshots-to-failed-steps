/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// eslint-disable-next-line import/no-extraneous-dependencies
const cucumber = require('cypress-cucumber-preprocessor').default;
const coverage = require('@cypress/code-coverage/task');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  coverage(on, config);

  on('file:preprocessor', cucumber());
  
  on('task', {
    log(message) {
      console.log(message);
      return null;
    }
  });

  return config;
};
