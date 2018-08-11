# Deploy the current version of the solution package in the SharePoint App Catalog

## Summary

This custom gulp task can be used to deploy the current version of the solution package in the SharePoint app catalog. To run this task, you need to either manually upload the file or use the [upload-app-package](../upload-app-package) task.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.1.3-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
deploy-app-package|Elio Struyf (MVP, [U2U](https://www.u2u.be), [@eliostruyf](https://twitter.com/eliostruyf))

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|August 14, 2017|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Prerequisites

This tasks requires the `node-sppkg-deploy` module, you can install this module to your project via the following command: `npm install node-sppkg-deploy --save-dev --save-exact`

## Setup

* copy the **[gulpfile-deploy-app-package.js](./gulpfile-deploy-app-package.js)** file to your SharePoint Framework project
* change the standard **gulpfile.js** file to:

```js
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

require('./gulpfile-deploy-app-package');

build.initialize(gulp);
```

In case you want to configure some default values for your environment, you can do this in the `gulpfile-deploy-app-package.js` file. The following environment information can be configured:

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
gulp deploy-sppkg --username "username" --password "password" --tenant "tenant-name-only" --catalogsite "sites/catalog"
```

This will give you the following output:

```text
> ~/nodejs/spfx/spfx-build-pipeline > gulp deploy-sppkg --ship --username admin@mytenant.onmicrosoft.com --password pass@word1 --tenant estruyfdev --catalogsite sites/catalog
Build target: SHIP
[09:16:12] Using gulpfile ~/nodejs/spfx/test-wp-deploy/gulpfile.js
[09:16:12] Starting gulp
[09:16:12] Starting 'deploy-sppkg'...
INFO: FormDigestValue retrieved
INFO: Site ID - cfc8561a-0c45-4296-bb32-000000000000
INFO: Web ID - 1123669b-5497-40b1-8e9f-000000000000 / List ID - e94e5a04-4982-4640-b934-000000000000
INFO: List item ID - 10 / version - 45
INFO: App package has been deployed
INFO: COMPLETED
[09:16:20] Finished 'deploy-sppkg' after 8.21 s
[09:16:21] ==================[ Finished ]==================
[09:16:21] Project test-wp-deploy version: 0.0.1
[09:16:21] Build tools version: 2.5.3
[09:16:21] Node version: v6.10.0
[09:16:21] Total duration: 12 s
```

<img src="https://telemetry.sharepointpnp.com/sp-dev-build-extensions/gulp-tasks/deploy-app-package" />