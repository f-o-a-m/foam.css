# foam.css

[![Latest release](http://img.shields.io/github/release/f-o-a-m/foam.css.svg)](https://github.com/f-o-a-m/foam.css/releases)
[![Build status](https://travis-ci.org/f-o-a-m/foam.css.svg?branch=master)](https://travis-ci.org/f-o-a-m/foam.css)

## style guide

See styleguide: <https://f-o-a-m.github.io/foam.css/>

## scripts

- `npm start` start webserver serving `/catalog`, also watches for changes made in `/catalog`
- `npm run css` compile `/styles/*.sass` into `/catalog/static/dist`
- `npm run watch` watches for changes made in `/styles` and compiles changed styles into `/catalog/static/dist`
- `npm run build` builds the styleguide into `/catalog/build`

## note

- `/catalog/static/fonts` is a symbolic link to `/fonts`
- `/catalog/static/assets` is a symbolic link to `/assets`
