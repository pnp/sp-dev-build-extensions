# Show SharePoint Framework Extensions debug information

## Summary

Custom gulp task showing query string parameters required for debugging of the different SharePoint Framework Extensions in the current project.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.3.0-green.svg)

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
1.1.0|October 5, 2017|Verified working with SPFx v1.3.0
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
gulp serve --nobrowser
```

This will run the standard `gulp serve` task followed by a listing of the debug query string parameters for the different extensions in the current project:

```text
> ~/dev/spfx-extensions > gulp serve --nobrowser
Build target: DEBUG
[20:06:14] Using gulpfile C:\repos\udi\Udi-misc\O365\Provisioning\SPFx\Pzl.O365.ExtranetDisclaimer\gulpfile.js
[20:06:14] Starting gulp
[20:06:14] Starting 'serve'...
[20:06:14] Starting subtask 'configure-sp-build-rig'...
[20:06:14] Finished subtask 'configure-sp-build-rig' after 4.85 ms
[20:06:14] Starting subtask 'spfx-serve'...
[20:06:14] Finished subtask 'spfx-serve' after 197 ms
[20:06:14] Starting subtask 'pre-copy'...
[20:06:14] Finished subtask 'pre-copy' after 5.96 ms
[20:06:14] Starting subtask 'copy-static-assets'...
[20:06:14] Starting subtask 'sass'...
[20:06:15] Server started https://localhost:4321
[20:06:15] LiveReload started on port 35729
[20:06:15] Finished subtask 'sass' after 706 ms
[20:06:15] Starting subtask 'tslint'...
[20:06:15] Starting subtask 'typescript'...
[20:06:15] [typescript] TypeScript version: 2.4.2
[20:06:15] Finished subtask 'copy-static-assets' after 1.25 s
[20:06:16] Finished subtask 'tslint' after 849 ms
[20:06:17] Finished subtask 'typescript' after 2 s
[20:06:17] Starting subtask 'ts-npm-lint'...
[20:06:17] Finished subtask 'ts-npm-lint' after 23 ms
[20:06:17] Starting subtask 'api-extractor'...
[20:06:17] Finished subtask 'api-extractor' after 967 μs
[20:06:17] Starting subtask 'post-copy'...
[20:06:17] Finished subtask 'post-copy' after 416 μs
[20:06:17] Starting subtask 'collectLocalizedResources'...
[20:06:17] Finished subtask 'collectLocalizedResources' after 4.86 ms
[20:06:17] Starting subtask 'configure-webpack'...
[20:06:18] Finished subtask 'configure-webpack' after 322 ms
[20:06:18] Starting subtask 'webpack'...
[20:06:18] Finished subtask 'webpack' after 216 ms
[20:06:18] Starting subtask 'configure-webpack-external-bundling'...
[20:06:18] Finished subtask 'configure-webpack-external-bundling' after 1.87 ms
[20:06:18] Starting subtask 'copy-assets'...
[20:06:18] Finished subtask 'copy-assets' after 26 ms
[20:06:18] Starting subtask 'write-manifests'...
[20:06:19] Finished subtask 'write-manifests' after 584 ms
[20:06:19] Starting subtask 'serve-info'...
ExtranetDisclaimerApplicationCustomizer:
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"b513cc49-8d38-4b41-9af8-6ad3ee4466b3":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"prop1":"val1"}}}

[20:06:19] Finished subtask 'serve-info' after 1.35 ms
[20:06:19] Starting subtask 'reload'...
[20:06:19] Finished subtask 'reload' after 1.35 ms
```

<img src="https://telemetry.sharepointpnp.com/sp-dev-build-extensions/gulp-tasks/serve-info" />
