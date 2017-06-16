# Update the CDN URL from a gulp task

## Summary

Custom gulp task that can be used to update the CDN URL in the `manifest.json` file. This could be useful for targeting multiple environments in build and release pipelines.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.1.1-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
update-manifest|Elio Struyf (MVP, U2U, @eliostruyf)

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|June 16, 2017|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Setup

* copy the **gulpfile-update-manifest.js** file to your SharePoint Framework project
* change the standard **gulpfile.js** file to:

```js
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

require('./gulpfile-update-manifest');

build.initialize(gulp);
```

## Usage

In the command line run:

```sh
gulp update-manifest --cdnpath "<your-cdn-location>"
```

This will give you the following output:

```text
> ~/nodejs/spfx/spfx-build-pipeline > gulp update-manifest --cdnpath "https://mytenant.sharepoint.com/cdn"
Build target: DEBUG
[10:06:35] Using gulpfile ~/nodejs/spfx/spfx-build-pipeline/gulpfile.js
[10:06:35] Starting gulp
[10:06:35] Starting 'update-manifest'...
[10:06:35] Finished 'update-manifest' after 1.76 ms
[10:06:36] ==================[ Finished ]==================
[10:06:36] Project spfx-build-pipeline version: 0.0.1
[10:06:36] Build tools version: 2.5.0
[10:06:36] Node version: v6.10.0
[10:06:36] Total duration: 2.25 s
```

<img src="https://telemetry.sharepointpnp.com/sp-dev-build-extensions/gulp-tasks/update-manifest" />