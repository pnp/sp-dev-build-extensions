# Upload the solution package to the SharePoint Catalog

## Summary

This custom gulp task can be used to upload your app solution package to the SharePoint app catalog library.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.1.1-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
update-manifest|Elio Struyf (MVP, [U2U](https://www.u2u.be), [@eliostruyf](https://twitter.com/eliostruyf))

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|June 16, 2017|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Prerequisites

This tasks requires the `gulp-spsync-creds` module, you can install this module to your project via the following command: `npm install gulp-spsync-creds --save-dev --save-exact`

## Setup

* copy the **gulpfile-upload-app-package.js** file to your SharePoint Framework project
* change the standard **gulpfile.js** file to:

```js
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

require('./gulpfile-upload-app-package');

build.initialize(gulp);
```

In case you want to configure some default values for your environment, you can do this in the `gulpfile-upload-app-package.js` file. The following environment information can be configured:

```javascript
const environmentInfo = {
  "username": "",
  "password": "",
  "tenant": "",
  "catalogSite": ""
}
```

## Usage

In the command line run (if you configured default values, they do not have to be specified):

```sh
gulp upload-app-pkg --ship --username "username" --password "password" --tenant "tenant-name-only" --catalogsite "sites/catalog"
```

This will give you the following output:

```text
> ~/nodejs/spfx/spfx-build-pipeline > gulp upload-app-pkg --ship --username admin@mytenant.onmicrosoft.com --password pass@word1 --tenant estruyfdev --catalogsite sites/catalog
Build target: SHIP
[11:17:14] Using gulpfile ~/nodejs/spfx/spfx-build-pipeline/gulpfile.js
[11:17:14] Starting gulp
[11:17:14] Starting 'upload-app-pkg'...
[11:17:14] Uploading spfx-build-pipeline.sppkg
[11:17:25] Upload successful 10837ms
[11:17:27] Published file 1944ms
[11:17:27] Finished 'upload-app-pkg' after 13 s
[11:17:28] ==================[ Finished ]==================
[11:17:28] Project spfx-build-pipeline version: 0.0.1
[11:17:28] Build tools version: 2.5.0
[11:17:28] Node version: v6.10.0
[11:17:28] Total duration: 15 s
```

<img src="https://telemetry.sharepointpnp.com/sp-dev-build-extensions/gulp-tasks/upload-to-sharepoint" />