/*global module:false*/
module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');
  
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! CODR - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* https://github.com/pranavrele/codr/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'PRANAV RELE; Licensed Apache 2.0 */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['css/src/bootstrap.min.css','css/src/jpreloader.min.css','css/src/font-awesome.min.css','css/src/animate.min.css','css/src/magnific-popup.min.css','css/src/owl.carousel.css','css/src/owl.theme.css','css/src/owl.transitions.css','css/src/rele.min.css'],
        dest: 'css/dist/codr.min.css',
      }
    },
    cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'css/src',
	      src: ['jpreloader.css','magnific-popup.css','rele.css', '!*.min.css'],
	      dest: 'css/src',
	      ext: '.min.css'
	    }]
	  }
	},
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['js/src/jquery.min.js','js/src/bootstrap.min.js','js/src/retina.min.js','js/src/jpreloader.min.js','js/src/detectmobilebrowser.js','js/src/debouncer.js','js/src/jquery.easing.min.js','js/src/jquery.sticky.js','js/src/jquery.magnific-popup.min.js','js/src/jquery.matchHeight-min.js','js/src/wow.min.js','js/src/skrollr.min.js','js/src/owl.carousel.js','js/src/rele.js','js/src/owl.js'],
        dest: 'js/dist/codr.min.js'
      }
    },
    imagemin: {                          // Task 
	    static: {                          // Target 
	      options: {                       // Target options 
	        optimizationLevel: 1,
	        svgoPlugins: [{ removeViewBox: false }],
	        use: [mozjpeg()]
	      },
	      files: {                         // Dictionary of files   // 'destination': 'source'
	        'img/dist/favicon.png': 						'img/src/favicon.png',
	        'img/dist/favicon_180.png': 					'img/src/favicon_180.png',
	        'img/dist/general/background.jpg': 				'img/src/general/background.jpg', 
	        'img/dist/general/profile.jpg': 				'img/src/general/profile.jpg',
	        'img/dist/projects/project1/background.jpg': 	'img/src/projects/project1/background.jpg',
	        'img/dist/projects/project1/image.png': 		'img/src/projects/project1/image.png',
	        'img/dist/projects/project2/background.jpg': 	'img/src/projects/project2/background.jpg',
	        'img/dist/projects/project2/image.png': 		'img/src/projects/project2/image.png'
	      }
    	}
    },
    watch: {
      css: {
        files: 'css/src/*',
        tasks: ['cssmin', 'concat']
      },
      js: {
        files: 'js/src/*',
        tasks: ['uglify']
      },
      img: {
        files: 'img/src/*',
        tasks: ['imagemin']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['imagemin','cssmin', 'concat', 'uglify']);

};
