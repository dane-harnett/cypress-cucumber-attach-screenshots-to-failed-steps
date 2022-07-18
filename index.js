let sanitize = require("sanitize-filename");

export function saveScreenShot() {
  const currentTest = cy.state('test');
  
  if (window.cucumberJson?.generate && currentTest.state === 'failed'
      && currentTest.currentRetry() === currentTest.retries()) {
    
    const screenshotsFolder = Cypress.config('screenshotsFolder');
    const { testState } = window;

    const featureName = sanitize(testState.feature.name);
    const scenarioName = sanitize(testState.currentScenario.name);

    const screenshotFileName = `${featureName} -- ${scenarioName} (failed).png`;
    
    cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`, 'base64').then((imgData) => {
      if (imgData) {
        const scenario = testState.runTests[testState.currentScenario.name];
        const stepResult = scenario[testState.currentStep];
        
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
}
