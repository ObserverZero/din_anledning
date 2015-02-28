module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    "_/script.js": ["js/main.js", 
                                    "js/mobile.js", 
                                    "js/tablet.js", 
                                    "js/desktop.js"]

                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "_/index.html": "index.html"
                }
            }
        },
        concat: {
            dist: {
                src: ["sass/reset.scss", 
                      "sass/main.scss", 
                      "sass/mobile.scss", 
                      "sass/tablet.scss", 
                      "sass/desktop.scss"],

                dest: "sass/concat.scss"
            },
        },
        sass: {
            dist: {
                options: {
                    outputStyle: "compressed"
                },
                files: {
                    "_/style.css": "sass/concat.scss"
                }//files
            }//dist
        },//sass
        watch: {
            options: {livereload: true},
            javascript: {
                files: ["js/*.js"],
                tasks: ["uglify"]
            },
            concat: {
                files: ["sass/reset.scss", 
                        "sass/main.scss", 
                        "sass/mobile.scss", 
                        "sass/tablet.scss", 
                        "sass/desktop.scss"],

                tasks: ["concat"]
            },
            sass: {
                files: ["sass/concat.scss"],
                tasks: ["sass"]
            },//sass
            html: {
                files: ["index.html"],
                tasks: ["htmlmin"]
            }//html
        }//watch
    });//initConfig
    grunt.registerTask("default", ["watch"]);
};//exports
