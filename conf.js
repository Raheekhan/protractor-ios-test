exports.config = {

  SELENIUM_PROMISE_MANAGER: false,

  specs: ['spec.js'],
  framework: 'jasmine',

  jasmineNodeOpts:
  {
      defaultTimeoutInterval: 100000
  },

  allScriptsTimeout: 10000,

  seleniumAddress: 'https://uscloud.experitest.com/wd/hub',

  capabilities: {
    accessKey: '',
    platformName: 'iOS',
    udid: '',
    browserName: 'Safari',
    testName: 'protractor_test',
    automationName: 'XCUITest',
    dontGoHomeOnQuit: true
  }

}
