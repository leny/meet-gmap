"use strict";

module.exports = function( grunt ) {

    grunt.loadNpmTasks( "grunt-eslint" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );

    grunt.initConfig( {
        "eslint": {
            "script": [ "./app/js/script.js" ]
        },
        "watch": {
            "script": {
                "files": [ "./app/js/script.js" ],
                "tasks": [ "eslint:script" ]
            }
        }
    } );

    grunt.registerTask( "default", [ "eslint" ] );

    grunt.registerTask( "work", [
        "default",
        "watch"
    ] );

};
