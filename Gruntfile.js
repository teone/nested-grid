module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['sass/grid.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true,
                },
            },
        },
        compass: {
            dist: {
                options: {              // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'expanded'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');

};