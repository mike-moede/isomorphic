'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      npm: {
        files: [
          { expand: true, flatten: true, src: ['node_modules/fetch/lib/*.js'], dest: 'lib/vendor/', filter: 'isFile' },
        ]
      },
      build: {
        files: [
          { expand: true, flatten: true, src: ['src/*.js'], dest: 'dist', filter: 'isFile' },
        ]
      }
    },
    concat: {
      options: {
        separator: ';\r\n/*next*/\r\n',
      },
      build: {
        src: ['dist/*.js', '!dist/bundle-raw.js'],
        dest: 'dist/bundle-raw.js',
      },
    },
    shell: {
      browserify: {
        command: 'browserify dist/bundle-raw.js > public/javascripts/bundle.js'
      },
      buildClean: {
        command: [
          'rm -drf dist',
          'rm -f dist/bundle.js'
        ].join('&&')
      },
      multiple: {
        command: [
          'echo line1',
          'echo line2'
        ].join('&&')
      },
      eslint: {
        command: 'eslint .'
      },
      mocha: {
        command: 'mocha tests'
      }
    },
    watch: {
      src: {
        files: ['src/*.js', 'src/vendor/*.js'],
        tasks: ['build'],
      },
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '',
          src: ['public/javascripts/bundle.js'],
          dest: 'dist/es5',
          ext: '.js'
        }]
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'public/javascripts/bundle.min.js': ['dist/es5/bundle.js']
        }
      }
    },
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('eslint', ['shell:eslint']);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', [
    'eslint',
    'shell:mocha',
    'shell:buildClean',
    'copy:build',
    'concat:build',
    'shell:browserify',
    'babel:dist',
    'uglify'
  ]);

};
