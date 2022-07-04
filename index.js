afterEach(() => {
  const currentTest = cy.state('test');
  if (window.cucumberJson?.generate && currentTest.state === 'failed'
      && currentTest.currentRetry() === currentTest.retries()) {
    
    const screenshotsFolder = Cypress.config('screenshotsFolder');
    const { testState } = window;
    const scenario = testState.runTests[testState.currentScenario.name];
    const stepResult = scenario[testState.currentStep];

    const scenarioName = testState.currentScenario.name.endsWith('.')
        ? testState.currentScenario.name.substring(0, testState.currentScenario.name.length - 1)
        : testState.currentScenario.name;

    const screenshotFileName = `${testState.feature.name} -- ${scenarioName} (failed).png`;

    cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`, 'base64').then((imgData) => {
      if (imgData) {
        stepResult.attachment = {
          name: screenshotFileName,
          data: imgData,
          media: { type: 'image/png' },
          index: testState.currentStep,
          testCase: testState.formatTestCase(testState.currentScenario),
        };
      }
    });
  }
});
