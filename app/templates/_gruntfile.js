//
// Gruntfile.js
// -------------------------------------------------------
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Stylus
        stylus: {
            compile: {
                options: {
                    paths: ['static/styl'],
                    use: [
                        require('fluidity') // use stylus plugin at compile time
                    ],
                },
                files: {
                    'app/stylesheets/style.css': 'app/stylesheets/stylus/source.styl'
                }
            }
        }
    });

    // Cargamos grunt-contrib-stylus
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['stylus']);
};
