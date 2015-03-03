# js-formatter
[![Build Status](https://secure.travis-ci.org/briandipalma/js-formatter.png)](http://travis-ci.org/briandipalma/js-formatter)
[![Dependency Status](https://david-dm.org/briandipalma/js-formatter.png)](https://david-dm.org/briandipalma/js-formatter)
[![devDependency Status](https://david-dm.org/briandipalma/js-formatter/dev-status.svg)](https://david-dm.org/briandipalma/js-formatter#info=devDependencies)

### Purpose

This repository hosts a wrapper around [esformatter](https://github.com/millermedeiros/esformatter/) that formats JS
code to follow the [Caplin style guide](https://github.com/caplin/StyleGuide). As esformatter can be used stand alone
with configuration it's generally not required to wrap it. The reason it's wrapped is for convenience as this package
depends on a set of required esformatter plugins. It also hosts the style guide esformatter configuration. So
installing it will deal with plugins and configuration. This package can be used stand alone from the command line or
as a required library.

### Mechanics

To use as a stand alone CLI tool install it globally with the command.

```bash
$ npm i -g briandipalma/js-formatter
```

Once installed `cd` into a directory with a `src` subdirectory and run.

```bash
$ js-formatter
```

This will format all `*.js` files in the `src` directory.

```bash
$ js-formatter -t
```

Will format the `tests` directory.

### Testing

```bash
$ npm t
```
