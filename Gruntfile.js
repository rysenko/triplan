module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'static/js/bundle.js': ['static/js/index.js'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};