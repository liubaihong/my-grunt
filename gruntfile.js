// grunt的入口文件
// 用于定义一些需要grunt自动执行的任务
// 需要导出一个函数
// 此函数接收一个grunt的形参，内部提供一些任务时可以用到的API
const sass = require("sass")
const loadGruntTasks = require("load-grunt-tasks")

module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    "dist/css/main.css": "src/scss/main.scss"
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ["@babel/preset-env"]
            },
            main: {
                files: {
                    "dist/js/app.js": "src/js/app.js"
                }
            }
        },
        watch: {
            js: {
                files: ["src/js/*.js"],
                tasks: ["babel"]
            },
            css: {
                files: ["src/scss/*.scss"],
                tasks: ["sass"]
            }
        }
    })
    loadGruntTasks(grunt)
    grunt.registerTask("default", ["sass", "babel", "watch"])
}