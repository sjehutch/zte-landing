module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      html: {
        files: [{
          expand: true,
          cwd: "app",
          dest: "public",
          src: "*.jade",
          ext: ".html"
        }],
        options: {
          client: false,
          livereload: true,
          pretty: true
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'

        },
        files: [{
          expand: true,
          cwd: "app/sass",
          dest: "public/css",
          src: "*.scss",
          ext: ".css"
        }]
      }
    },
    watch: {
      jade: {
        files: ["app/*.jade", "app/sass/*.scss"],
        tasks: ["jade", "sass"],
        options: {
          livereload: true
        }
      }

    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default', ['jade','sass','watch']);

};
