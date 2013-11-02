module.exports = function(grunt) {

  
  grunt.initConfig({
    uglify: {
      build: {
        src: ['js/app.js'],
        dest: 'js/app.min.js'
      }
    },
    markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: 'docs/html/',
          ext: '.html'
        }
      ],
      options: {
        template: 'templates/index.html',
        markdownOptions: {
          gfm: true,
          codeLines: {
            before: '<span>',
            after: '</span>'
          }
        }
      }
    }
  },
  watch :{
    scripts :{
      files : ['js/app.js','*.md','css/*.css'],
      tasks : ['uglify','markdown'],
      options : {
        livereload : 9090,
      }
    }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['uglify','markdown']);  
};