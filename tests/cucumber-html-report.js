const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/reports/cucumber-json',
    reportPath: './cypress/reports/cucumber-htmlreport.html',
  metadata: {
    browser: {
      name: 'chrome',
    },
    device: 'desktop',
    platform: {
      name: 'windows'
    }
  }
});
