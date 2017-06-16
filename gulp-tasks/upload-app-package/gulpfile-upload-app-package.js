'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const spsync = require('gulp-spsync-creds').sync;

const environmentInfo = {
  "username": "",
  "password": "",
  "tenant": "",
  "catalogSite": ""
}


build.task('upload-app-pkg', {
  execute: (config) => {
    environmentInfo.username = config.args['username'] || environmentInfo.username;
    environmentInfo.password = config.args['password'] || environmentInfo.password;
    environmentInfo.tenant = config.args['tenant'] || environmentInfo.tenant;
    environmentInfo.catalogSite = config.args['catalogsite'] || environmentInfo.catalogSite;

    return new Promise((resolve, reject) => {
      const pkgFile = require('./config/package-solution.json');
      const folderLocation = `./sharepoint/${pkgFile.paths.zippedPackage}`;

      return gulp.src(folderLocation)
        .pipe(spsync({
          "username": environmentInfo.username,
          "password": environmentInfo.password,
          "site": `https://${environmentInfo.tenant}.sharepoint.com/${environmentInfo.catalogSite}`,
          "libraryPath": "AppCatalog",
          "publish": true
        }))
        .on('finish', resolve);
    });
  }
});