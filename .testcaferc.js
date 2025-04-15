const timeoutUnits = 30000;

module.exports = {
  src: ["tests/"],
  browsers: "chrome",
  disablePageCaching: false,
  disableMultipleWindows: false,
  disableNativeAutomation: true,
  screenshots: {
    takeOnFails: true,
    path: "screenshots",
    fullPage: true,
  },
  concurrency: 1,
  speed: 0.85,
  pageLoadTimeout: 40000,
  assertionTimeout: timeoutUnits,
  selectorTimeout: timeoutUnits,
  pageRequestTimeout: 40000,
  ajaxRequestTimeout: 25000,
  testExecutionTimeout: 300000,
  skipJsErrors: true,
};
