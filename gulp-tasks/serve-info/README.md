# Show SharePoint Framework Extensions debug information

## Summary

Custom gulp task showing query string parameters required for debugging of the different SharePoint Framework Extensions in the current project.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.1.1-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
serve-info|Waldek Mastykarz (MVP, Rencore, @waldekm)

## Version history

Version|Date|Comments
-------|----|--------
1.1.0|September 6, 2017|Updated to work with SPFx v1.2.0
1.0.0|June 9, 2017|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Setup

* copy the **gulpfile-serve-info.js** file to your SharePoint Framework project
* change the standard **gulpfile.js** file to:

```js
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

require('./gulpfile-serve-info');

build.initialize(gulp);
```

## Usage

In the command line run:

```sh
gulp serve-info --nobrowser
```

This will run the standard `gulp serve` task followed by a listing of the debug query string parameters for the different extensions in the current project:

```text
> ~/dev/spfx-extensions > gulp serve-info --nobrowser
Build target: DEBUG
[08:26:44] Using gulpfile ~/dev/spfx-extensions/gulpfile.js
[08:26:44] Starting gulp
[08:26:44] Starting 'serve'...
[08:26:44] Starting subtask 'pre-copy'...
[08:26:44] Finished subtask 'pre-copy' after 10 ms
[08:26:44] Starting subtask 'copy-static-assets'...
[08:26:44] Starting subtask 'sass'...
[08:26:45] Finished subtask 'sass' after 1.25 s
[08:26:45] Starting subtask 'tslint'...
[08:26:45] Starting subtask 'typescript'...
[08:26:45] [typescript] TypeScript version: 2.2.2
[08:26:45] Finished subtask 'copy-static-assets' after 1.37 s
[08:26:48] Finished subtask 'tslint' after 2.64 s
[08:26:48] Finished subtask 'typescript' after 2.64 s
[08:26:48] Starting subtask 'ts-npm-lint'...
[08:26:48] Finished subtask 'ts-npm-lint' after 39 ms
[08:26:48] Starting subtask 'api-extractor'...
[08:26:48] Finished subtask 'api-extractor' after 771 μs
[08:26:48] Starting subtask 'post-copy'...
[08:26:48] Finished subtask 'post-copy' after 302 μs
[08:26:48] Starting subtask 'collectLocalizedResources'...
[08:26:48] Finished subtask 'collectLocalizedResources' after 8.46 ms
[08:26:48] Starting subtask 'configure-webpack'...
[08:26:48] Finished subtask 'configure-webpack' after 403 ms
[08:26:48] Starting subtask 'webpack'...
(node:24013) DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
[08:26:49] Finished subtask 'webpack' after 1.23 s
[08:26:49] Starting subtask 'configure-webpack-external-bundling'...
[08:26:49] Finished subtask 'configure-webpack-external-bundling' after 804 μs
[08:26:49] Starting subtask 'copy-assets'...
[08:26:49] Finished subtask 'copy-assets' after 203 ms
[08:26:49] Starting subtask 'write-manifests'...
[08:26:50] Finished subtask 'write-manifests' after 406 ms
[08:26:50] Starting subtask 'serve'...
[08:26:50] Warning - [serve] The existing development certificate is missing the subjectAltName property and will not work with the latest versions of some browsers.  Untrust the certificate and generate a new one.
Starting api server on port 5432.
Registring api: /getwebparts
Registring api: /*.*
Registring api: /workbench
[08:26:51] Finished subtask 'serve' after 656 ms
[08:26:51] Finished 'serve' after 6.94 s
[08:26:51] Starting 'serve-info'...
ApplicationCustomizerApplicationCustomiz:
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifest.js&customActions={"e883a012-02e6-4475-a76c-fb79fb5cd15c":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"prop1":"val1"}}}

FieldCustomizerFieldCustomizer:
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifest.js&fieldCustomizers={"FieldName":{"id":"f1cf9bc8-7e0c-4cc9-b18e-653a3c43a667","properties":{"prop1":"val1"}}}

CommandSetCommandSet:
?loadSpfx=true&debugManifestsFile=https://localhost:4321/temp/manifest.js&customActions={"d59b7aef-c044-4603-8366-d60810a593de":{"location":"ClientSideExtension.ListViewCommandSet.CommandBar"}}

[08:26:51] Finished 'serve-info' after 1.3 ms
[08:26:51] Server started https://localhost:4321
[08:26:51] LiveReload started on port 35729
[08:26:51] ==================[ Finished ]==================
Warning - [serve] The existing development certificate is missing the subjectAltName property and will not work with the latest versions of some browsers.  Untrust the certificate and generate a new one.
[08:26:52] Project spfx-extensions version: 0.0.1
[08:26:52] Build tools version: 2.5.3
[08:26:52] Node version: v6.10.3
[08:26:52] Total duration: 11 s
[08:26:52] Task warnings: 1
```

<img src="https://telemetry.sharepointpnp.com/sp-dev-build-extensions/gulp-tasks/serve-info" />