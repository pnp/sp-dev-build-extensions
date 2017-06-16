# Upload the SharePoint Framework solution assets to a document library on SharePoint

## Summary

This custom gulp task can be used to upload your SharePoint Framework solution assets to a SharePoint document library. This could be useful when you are using the Office 365 CDN offering or using a document library to host your files.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.1.1-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
update-manifest|Elio Struyf (MVP, [U2U](https://www.u2u.be), [@eliostruyf](https://twitter.com/@eliostruyf))

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

* copy the **gulpfile-upload-to-sharepoint.js** file to your SharePoint Framework project
* change the standard **gulpfile.js** file to:

```js
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

require('./gulpfile-upload-to-sharepoint');

build.initialize(gulp);
```

In case you want to configure some default values for your environment, you can do this in the `gulpfile-upload-to-sharepoint.js` file. The following environment information can be configured:

```javascript
const environmentInfo = {
  "username": "",
  "password": "",
  "tenant": "",
  "cdnSite": "",
  "cdnLib": ""
}
```

## Usage

In the command line run (if you configured default values, they do not have to be specified):

```sh
gulp upload-to-sharepoint --ship --username "username" --password "password" --tenant "tenant-name-only" --cdnsite "relative-path-to-the-site" --cdnlib "library-url"
```

This will give you the following output:

```text
> ~/nodejs/spfx/spfx-build-pipeline > gulp upload-to-sharepoint --ship --username admin@mytenant.onmicrosoft.com --password pass@word1 --tenant mytenant --cdnlib cdn
Build target: SHIP
[11:16:47] Using gulpfile ~/nodejs/spfx/spfx-build-pipeline/gulpfile.js
[11:16:47] Starting gulp
[11:16:47] Starting 'upload-to-sharepoint'...
[11:16:47] Uploading build-wp.bundle_72b3c68a5fdbed6e279e5046e7b474da.js
[11:16:53] Upload successful 5660ms
[11:16:54] Published file 1473ms
[11:16:54] Uploading build-wp.bundle_8adfffebdd9e1a8715d737214174d0a9.js
[11:16:57] Upload successful 2289ms
[11:16:58] Published file 1558ms
[11:16:58] Uploading spfx-build-pipeline-buildwpstrings_en-us_536e65149b0acf4d52c0043073b9fc59.js
[11:17:01] Upload successful 2764ms
[11:17:02] Published file 1002ms
[11:17:02] Finished 'upload-to-sharepoint' after 15 s
[11:17:02] ==================[ Finished ]==================
[11:17:03] Project spfx-build-pipeline version: 0.0.1
[11:17:03] Build tools version: 2.5.0
[11:17:03] Node version: v6.10.0
[11:17:03] Total duration: 17 s
```

<img src="https://telemetry.sharepointpnp.com/sp-dev-build-extensions/gulp-tasks/upload-to-sharepoint" />