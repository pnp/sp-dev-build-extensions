# Contribution Guidance

If you'd like to contribute to this repository, please read the following guidelines. Contributors are more than welcome to share your learnings with others from centralized location.

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Question or Problem?

Please do not open GitHub issues for general support questions as the GitHub list should be used for feature requests and bug reports. This way we can more easily track actual issues or bugs from the code and keep the general discussion separate from the actual code.

If you have questions about how to use SharePoint Framework or any of the provided samples, please use the following locations.

* [SharePoint Developer Space](http://aka.ms/SPPnP-Community) at http://techcommunity.microsoft.com
* [SharePoint Stack Exchange](http://sharepoint.stackexchange.com/) with 'spfx' tag

## Typos, Issues, Bugs and contributions

Whenever you are submitting any changes to the SharePoint repositories, please follow these recommendations.

* Always fork repository to your own account for applying modifications
* Do not combine multiple changes to one pull request, please submit for example any samples and documentation updates using separate PRs
* If you are submitting multiple samples, please create specific PR for each of them
* If you are submitting typo or documentation fix, you can combine modifications to single PR where suitable

## Sample Naming and Structure Guidelines

When you are submitting a new sample, it has to follow up below guidelines

* You will need to have a README file for your contribution, which is based on [provided template](../samples/README-template.md) under the Samples folder. Please copy this template and update accordingly. README has to be named as README.md with capital letters.
  * You will need to have a picture of the web part in practice in the README file ("pics or it didn't happen"). Preview image must be located in /assets/ folder in the root your you solution.
* README template contains specific tracking image as a final entry in the page with img tag by default to https://telemetry.sharepointpnp.com/sp-dev-build-extensions/samples/readme-template. This is transparent image, which is used to track popularity of individual samples in GitHub.
  * Updated the image src element according with repository name and folder information. If your sample is for example in samples folder and named as vsts-cd, src element should be updated as https://telemetry.sharepointpnp.com/sp-dev-build-extensions/samples/vsts-cd
* If you find already similar kind of sample from the existing samples, we would appreciate you to rather extend existing one, than submitting a new similar sample
  * If you for example use Microsoft Graph with React, please rather add new web part to already existing solution, rather than introducing completely new solution
  * When you update existing samples, please update also README accordingly with information on provided changes and with your author details
* Do not use period/dot in the folder name of the provided sample

## Submitting Pull Requests

Here's a high level process for submitting new samples or updates to existing ones.

1. Sign the Contributor License Agreement (see below)
1. Fork this repository [SharePoint/sp-dev-build-extensions](https://github.com/SharePoint/sp-dev-build-extensions) to your GitHub account
1. Create a new branch off the `master` branch for your fork for the contribution
1. Include your changes to your branch
1. Commit your changes using descriptive commit message * These are used to track changes on the repositories for monthly communications
1. Create a pull request in your own fork and target `dev` branch
1. Fill up the provided PR template with the requested details

Before you submit your pull request consider the following guidelines:

* Search [GitHub](https://github.com/SharePoint/sp-dev-build-extensions/pulls) for an open or closed Pull Request
  that relates to your submission. You don't want to duplicate effort.
* Make sure you have a link in your local cloned fork to the [SharePoint/sp-dev-build-extensions](https://github.com/SharePoint/sp-dev-build-extensions):

  ```shell
  # check if you have a remote pointing to the Microsoft repo:
  git remote -v

  # if you see a pair of remotes (fetch & pull) that point to https://github.com/SharePoint/sp-dev-build-extensions, you're ok... otherwise you need to add one

  # add a new remote named "upstream" and point to the Microsoft repo
  git remote add upstream https://github.com/SharePoint/sp-dev-build-extensions.git
  ```

* Make your changes in a new git branch:

  ```shell
  git checkout -b vsts-cd master
  ```

* Ensure your fork is updated and not behind the upstream **sp-dev-build-extensions** repo. Refer to these resources for more information on syncing your repo:
  * [GitHub Help: Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)
  * [Keep Your Forked Git Repo Updated with Changes from the Original Upstream Repo](http://www.andrewconnell.com/blog/keep-your-forked-git-repo-updated-with-changes-from-the-original-upstream-repo)
  * For a quick cheat sheet:

    ```shell
    # assuming you are in the folder of your locally cloned fork....
    git checkout master

    # assuming you have a remote named `upstream` pointing official **sp-dev-build-extensions** repo
    git fetch upstream

    # update your local master to be a mirror of what's in the main repo
    git pull --rebase upstream master

    # switch to your branch where you are working, say "vsts-cd"
    git checkout vsts-cd

    # update your branch to update it's fork point to the current tip of master & put your changes on top of it
    git rebase master
    ```

* Push your branch to GitHub:

  ```shell
  git push origin vsts-cd
  ```

## Merging your Existing Github Projects with this Repository

If the sample you wish to contribute is stored in your own Github repository, you can use the following steps to merge it with the this repository:

* Fork the `sp-dev-build-extensions` repository from GitHub
* Create a local git repository

    ```shell
    md sp-dev-build-extensions
    cd sp-dev-build-extensions
    git init
    ```

* Pull your forked copy of sp-dev-build-extensions into your local repository

    ```shell
    git remote add origin https://github.com/yourgitaccount/sp-dev-build-extensions.git
    git pull origin dev
    ```

* Pull your other project from github into the samples folder of your local copy of sp-dev-build-extensions

    ```shell
    git subtree add --prefix=samples/projectname https://github.com/yourgitaccount/projectname.git master
    ```

* Push the changes up to your forked repository

    ```shell
    git push origin dev
    ```

## Signing the CLA

Before we can accept your pull requests you will be asked to sign electronically Contributor License Agreement (CLA), which is prerequisite for any contributions to PnP repository. This will be one time process, so for any future contributions you will not be asked to re-sign anything. After the CLA has been signed, our PnP core team members will have a look on your submission for final verification of the submission. Please do not delete your development branch until the submission has been closed.

You can find Microsoft CLA from the following address - https://cla.microsoft.com. 

Thank you for your contribution.

> Sharing is caring. 