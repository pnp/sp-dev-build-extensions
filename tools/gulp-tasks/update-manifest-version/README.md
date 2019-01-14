# Update the package version number from a gulp task

## Summary

Custom gulp task that can be used to update the version number in the `package-solution.json` file. This could be useful for adding new build 
number to each build of the package.

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.1.1-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
update-manifest|Tom Solem 

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|Jan 11, 2019|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Setup

* copy the **gulpfile-update-manifest-version.js** file to your SharePoint Framework project
* change the standard **gulpfile.js** file to:

```js
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

require('./gulpfile-update-manifest-version');

build.initialize(gulp);
```

## Usage

In the command line run:

```sh
gulp update-package-version --versionNumber "<your-package-version-number>"
```

This will give you the following output:

```text
$ gulp update-package-version --versionNumber "1.2.3.4"
Build target: DEBUG
[14:45:33] Using gulpfile ~/nodejs/spfx/spfx-build-pipeline/gulpfile.js
[14:45:33] Starting gulp
[14:45:33] Starting 'update-package-version'...
[14:45:33] Finished 'update-package-version' after 989 μs
[14:45:34] ==================[ Finished ]==================
[14:45:34] Project spfx-build-pipeline version:0.0.1
[14:45:34] Build tools version:3.8.33
[14:45:34] Node version:v8.12.0
[14:45:34] Total duration:4.17 s
```

Use the tool in the yaml build definition:

```text
variables:
  workingDir: 'src'
  major: 1
  minor: 0
  # creates a counter called versioncounter and seeds it at 100 and then assigns the value to a variable named patch.
  patch: $[counter('versioncounter', 100)]

...

  - task: Gulp@0
    displayName: 'gulp update-package-version'
    inputs:
      gulpFile: '$(workingDir)/gulpfile.js'
      targets: update-package-version
      arguments: '--versionNumber $(major).$(minor).$(patch)'

```
