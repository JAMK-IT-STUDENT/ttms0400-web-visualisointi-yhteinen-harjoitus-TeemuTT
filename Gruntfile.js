module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};
