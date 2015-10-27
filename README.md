# grunt-digest

> Create digested copies of assets and add mapping to a manifest. Useful with rails applications

## Getting Started
This plugin requires Grunt `~0.4.1` and has been tested with Rails 4.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-digest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-digest');
```

## The "digest" task

### Overview
In your project's Gruntfile, add a section named `digest` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  digest: {
    options: {
      // Task-specific options go here.
      out: 'dist/manifest.json',
      separator: '-',
      algorithm: 'md5'
    },
    files: {
      // Target-specific file lists.
      src: ['dist/**.js']
    },
  },
})
```

### Options

#### options.out
Type: `String`
Default value: `''`

Path to the generated manifest

#### options.separator
Type: `String`
Default value: `'-'`

A string value that is used separate basename with digest hash.

#### options.algorithm
Type: `String`
Default value: `'md5'`

Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License

Copyright 2013 Zendesk

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
