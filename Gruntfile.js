module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      build: {
        src: 'src/game.js',
        dest: 'dist/js/game.min.js',
      },
    },
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        esversion: 6,
        globals: {
          jQuery: true,
          console: true,
          module: true,
        },
      },
    },
    cssmin: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        },
        files: {
          'dist/stylesheets/style.min.css': ['src/*.css'],
        },
      },
    },
    watch: {
      files: ['<%= jshint.files %>', 'src/*.css'],
      tasks: ['jshint', 'uglify', 'cssmin'],
      options: { livereload: true },
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'dist',
          keepalive: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'connect']);
};
