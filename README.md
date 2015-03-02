# js-formatter
[![Build Status](https://secure.travis-ci.org/briandipalma/js-formatter.png)](http://travis-ci.org/briandipalma/js-formatter)
[![Dependency Status](https://david-dm.org/briandipalma/js-formatter.png)](https://david-dm.org/briandipalma/js-formatter)
[![devDependency Status](https://david-dm.org/briandipalma/js-formatter/dev-status.svg)](https://david-dm.org/briandipalma/js-formatter#info=devDependencies)

### Purpose

This repository hosts a wrapper around [esformatter](https://github.com/millermedeiros/esformatter/) that formats JS
code to follow the [Caplin style guide](https://github.com/caplin/StyleGuide). As esformatter can be used stand alone
with configuration it's generally not required to wrap it. The reason it's wrapped is for convenience as this package
will also install a set of esformatter plugins. It also hosts the style guide esformatter configuration. This package
can be used stand alone from the command line or as a required library.

### Mechanics

.

### Testing


-t will format the tests directory.