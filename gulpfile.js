var gulp = require("gulp");
var runSequence = require("run-sequence");
var requireDir = require("require-dir");

requireDir("./gulp-config");

global.distFolder = "./dist";

gulp.task("web-debug", function() {
    global.production = false;
    global.target = "WEB";
    global.distFolder = "./dist";

    run();
    watch();
});

gulp.task("web-prod", function() {
    global.production = true;
    global.target = "WEB";
    global.distFolder = "./dist";

    run();
});

function run() {
    runSequence("clean", "copy", "js-vendor", "js-client");
}

function watch() {
    gulp.watch(
        ["./src/game/index.html"],
        ["copy"]
    );

    gulp.watch(
        ["./src/**/*.js"],
        ["js-client"]
    );
}
