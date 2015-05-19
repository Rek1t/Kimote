module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			minify: {
				src: [
					'style.css'
				],
				dest: 'www/css/style.min.css'
			}
		},
		uglify: {
			options: {
				compress: true
			},
			build: {
				files: {
					'www/js/scripts.min.js' : [
						'www/js/app.js',
						'www/js/controllers/FilesCtrl.js',
						'www/js/controllers/MoviesCtrl.js',
						'www/js/controllers/MusicCtrl.js',
						'www/js/controllers/PicsCtrl.js',
						'www/js/controllers/RemoteCtrl.js',
						'www/js/controllers/SideMenuCtrl.js',
						'www/js/controllers/TVShowsCtrl.js',
						'www/js/factories/Loader.js',
						'www/js/factories/Logger.js',
						'www/js/factories/Manager.js',
						'www/js/factories/Requester.js',
						'www/js/factories/Runtime.js',
						'www/js/factories/Sounder.js'
					]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['uglify', 'cssmin']);
};
