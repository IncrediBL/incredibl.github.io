module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      jquery: {
        files: {
          'js/jquery.min.js': 'bower_components/jquery/dist/jquery.js'
        }
      },
      bootstrap: {
        files: {
          'js/bootstrap.min.js': 'bower_components/bootstrap/dist/js/bootstrap.js'
        }
      }
    },
    copy: {
      bootstrap: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/dist/fonts', src: ['**'], dest: 'fonts'}
        ]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', [ 'uglify', 'copy', 'exec:build' ]);
  grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
