const timeoutUnits = 30000;

module.exports = {
  browsers: "chrome --disable-features=PasswordLeakDetection",
  disablePageCaching: false,
  disableMultipleWindows: true,
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
