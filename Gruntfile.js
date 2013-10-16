module.exports = function(grunt) {

	grunt.initConfig({
		gmaps_css: {
			all: {
				files: [{
					expand: true,
					cwd: 'styles/',
					src: '**/*.css',
					dest: 'styles/',
					ext: '.js'
				}]
			}
		},
		watch: {
			gmaps_css: {
				options: {
					atBegin: true
				},
				files: ['styles/**/*.css'],
				tasks: ['gmaps_css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-gmaps-css');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};