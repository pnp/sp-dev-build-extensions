'use strict';

const build = require('@microsoft/sp-build-web');
const fs = require('fs');

const environmentInfo = {
  "versionNumber": "1.0.0.0",
};

build.task('update-package-version', {
  execute: (config) => {
    return new Promise((resolve, reject) => {
    environmentInfo.versionNumber = config.args['versionNumber'] || environmentInfo.versionNumber;

      let json = JSON.parse(fs.readFileSync('./config/package-solution.json'));
      json.solution.version = environmentInfo.versionNumber;
      fs.writeFileSync('./config/package-solution.json', JSON.stringify(json));
      resolve();
    });
  }
});