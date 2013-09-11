/*
 * grunt-digest
 * https://github.com/hkjorgensen/grunt-digest
 *
 * Copyright (c) 2013 Henrik Kok Jorgensen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('digest', 'Create digested copies of assets and add mapping to a manifest. Useful with rails applications', function() {
    var crypto = require('crypto'),
        path = require('path'),
        filemap = {},
        tally = 0,
        options;

    // Merge task-specific and/or target-specific options with these defaults.
    options = this.options({
      out: '',
      separator: '-',
      algorithm: 'md5'
    });

    this.filesSrc.forEach(function(filepath) {
      var data, file, ext, base, digest, fileDigest, filepathDigest;

      file = path.basename(filepath);
      ext = path.extname(file);
      base = path.basename(filepath, ext);

      data = grunt.file.read(filepath);
      digest = crypto.createHash(options.algorithm).update(data).digest('hex');
      fileDigest = [base, options.separator, digest, ext].join('');
      filepathDigest = filepath.replace(file, fileDigest);

      //Copy file
      grunt.file.copy(filepath, filepathDigest);

      //Add file to map
      filemap[file] = fileDigest;
      grunt.verbose.writeln(file.cyan + ' -> ' + fileDigest.cyan);

      //File count
      tally++;
    });

    //Write JSON Manifest
    if (options.out !== '') {
      grunt.verbose.writeln('Creating filemap: ' + options.out.cyan);
      grunt.file.write(options.out, JSON.stringify(filemap));
    }

    //Log info
    grunt.log.writeln('Digested ' + tally.toString().cyan + ' files');
  });

};
