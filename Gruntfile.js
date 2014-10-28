module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['grid.scss'],
                tasks: ['sass']
            },
        },
        sass: {
            dist: {
                files: {
                    'grid.css': 'grid.scss'
                }
            }
        },
        compass: {
            dist: {
                options: {              // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');

};