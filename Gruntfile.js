module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['grid.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        },
        sass: {
            dist: {
                files: {
                    'grid.css': 'grid.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

};