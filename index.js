afterEach(() => {
  const screenshotsFolder = Cypress.config("screenshotsFolder");
  if (window.cucumberJson?.generate) {
    const testState = window.testState;
    const stepResult =
      testState.runTests[testState.currentScenario.name][testState.currentStep];
    if (stepResult?.status === "failed") {
      const scenarioName = testState.currentScenario.name.endsWith('.') ?
        testState.currentScenario.name.substring(0, testState.currentScenario.name.length - 1) :
        testState.currentScenario.name;

      const screenshotFileName = `${testState.feature.name} -- ${scenarioName} (failed).png`;
      
      cy.readFile(
        `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
        "base64"
      ).then((imgData) => {
        if(imgData) {
          stepResult.attachment = {
            data: imgData,
            media: { type: "image/png" },
            index: testState.currentStep,
            testCase: testState.formatTestCase(testState.currentScenario),
          };
        }
      });
    }
  }
});
