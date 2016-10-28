module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    babel: {
      options: {
        presets: ['babel-preset-es2015'],
        babelrc: false,
        comments: false,
        minified: true,
      },
      dist: {
        files: {
          'dist/js/game.min.js': 'src/game.js'
        }
      }
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
      tasks: ['jshint', 'babel', 'cssmin'],
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
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'babel', 'cssmin', 'connect']);
};
