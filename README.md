# TypeScript jQuery Template

use jQuery for TypeScript.

## Usage

use [Node.js](http://nodejs.org/)

### Setup

install [grunt](http://gruntjs.com/) & [bower](http://bower.io/) & [testem](https://github.com/airportyh/testem)

```sh
% sudo npm install -g grunt
% sudo npm install -g bower
% sudo npm install -g testem
```

npm package install

```sh
% npm install
```

install jQuery

```sh
% bower install jquery
```

or

```sh
% bower install https://github.com/jquery/jquery.git
```

### Tree

- `src/` ... `*.ts`, `*.html`
- `build/` ... compiled file to (`*.js`, `*.html`)
- `tests/` ... test file

### Command

build

```sh
% grunt
```

watch

```sh
% grunt watch
```

local web server

DocumentRoot is `build/`

```
% grunt server
```

test

```sh
% testem
```
