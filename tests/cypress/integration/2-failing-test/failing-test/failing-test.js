import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then("It fails", () => {
  cy.log('Fail scenario');
  expect('fail data')
      .to.have.string('success');
});