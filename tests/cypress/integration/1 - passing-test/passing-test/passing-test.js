import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then("It is a success", () => {
  cy.log('Success');
});