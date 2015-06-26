# The front-end code for LifeZette.

Getting Project Running Locally
========================

* [Install Git](http://git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Linux)

* [Install node.js](http://nodejs.org/)

    * At the time of creation node.js version is: 0.10.36
    * ***NOTE: DO NOT INSTALL NODE USING HOMEBREW*** - There are several known issues
      involving npm and homebrew.

* [Install bower](http://bower.io/)

        npm install -g bower

* [Install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)

        npm install -g gulp

* [Install bundler and gems](http://bundler.io/)

        gem install bundler
        bundle install

* [Install HubFlow](https://github.com/datasift/gitflow#installation)

        git clone https://github.com/datasift/gitflow
        cd gitflow
        sudo ./install.sh

* Clone project locally

        HTTPS:  git clone https://github.com/celerityweb/lifezette.git
        SSH:    git clone git@github.com:celerityweb/lifezette.git

* Cd into project directory (lifezette)

        cd lifezette

* Enter the following command into the terminal at the project root to start.

        npm install && gulp

Gulp Tasks
========================
### Dev Tasks
- default aka **gulp** -- Will be the default development task
- base64
- browsersync
- build
- clean
- extras
- fonts
- format-js
- html
- images
- less
- sass
- watch

### Production Tasks
- build:production -- will be the default task for production builds. Much slower as it includes minification, etc...
- optimize:css
- optimize:html
- optimize:images
- optimize:js
- rev:collect
- revision
- set-production
- strip-code

### Util Tasks
- bump -- update the semver with options

### Heroku Only
- heroku:development -- used by Heroku buildpack

### Versioning Options Using the bump task
Bump the package version. With no options, bumps to the next patch version. Currently updates bower.json and package.json. Make sure to update the version when appropriate.
[gulp-release-tasks](https://www.npmjs.com/package/gulp-release-tasks)

### Formatting Options
There is a gulp task to help with formatting. Currently it will format your JavaScript files to match the standards. This task will format all of the .js files in /app

* Usage: `gulp format-js`

Process For Making Changes
========================

HubFlow
-------------

Every change that is made to the project should be done in a branch, following the general [GitFlow work-flow](http://datasift.github.io/gitflow/IntroducingGitFlow.html)
To simplify this interaction the [HubFlow GitHub Tools](http://datasift.github.io/gitflow/GitFlowForGitHub.html) will be used to create feature and release branches.

To install HubFlow via brew

    brew install hubflow

If the change is directly related to a ticket, it should be done within a ticket feature branch `/feature/ticket/<ticket_number>`.
Otherwise a normal feature branch can be used `/feature/<description>`.

### Common terminal commands to simplify this process:
* `git hf feature start <feature description>` - starts a new feature branch with the given description
* `git hf feature cancel -f <feature description>` - deletes a given feature branch
* `git hf feature start <ticket number>` - starts a new feature ticket branch with the given ticket number
* `git hf feature cancel -f "ticket/<ticket number>` - deletes a given feature ticket branch
* `git hf release start <release version>` - starts a new release branch with the given release version
* `git hf release cancel -f <release version>` - finishes a release merging in the changes to the develop and master branches
* `git hf release finish <release version>` - deletes a given release branch

Pull Requests
-------------
All pull-requests **MUST** adhere to the following:

* peer reviewed
* adhere to the code quality standards defined in the next section
* fully implement the intended feature or ticket, partial implementations should stay in a separate branch
* pass all defined tests
* Once a change is complete it should be merged in manually by another developer from the GitHub web interface, after
they have had a chance to thoroughly review and approve of the changes.

Coding Standard
========================
In order to facilitate work by multiple developers, and ensure new developers can easily come up to speed, this project
will maintain a strict coding standard.

Project Specific
-------------
* NEVER merge commented out code, unless the code is used as a demonstration in a doc string.
* NEVER merge in partial feature implementations. If a feature is not yet complete it should live in a separate branch till it is.
* Limit the amount of code in single module, logically separating out sections when possible.
* For singletons objects it is preferred to simply define module level functions when possible.
* Aim to write code in a way that it is self-documenting.
* Don't use single letter variable names.
* Don't use built-in functions as variable names, with an exception for id.

NOTE: It is always okay to check-in code that does not follow the coding standard to your branches while you are working on
a feature. The code must be cleaned up before a pull-request is sent to be merged into the develop branch.
