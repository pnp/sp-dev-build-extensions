'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
const _ = require('lodash');

build.initialize(gulp);
var buildConfig = build.getConfig();
var karmaTask = _.find(buildConfig.uniqueTasks, (t) => t.name === 'karma');
karmaTask.taskConfig.configPath = './config/karma.config.js';
