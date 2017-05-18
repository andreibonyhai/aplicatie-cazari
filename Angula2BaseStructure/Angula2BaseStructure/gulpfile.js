/// <binding AfterBuild='copyPartialViews' ProjectOpened='default' />
var ts = require("gulp-typescript");
var gulp = require("gulp");
var flatten = require("gulp-flatten");
var clean = require("gulp-clean");
var debug = require('gulp-debug');
var replace = require('gulp-replace-path');
var through = require('through2');
//var path = require('gulp-path');

var destPath = "./Scripts/build/";

// Delete the dist directory
gulp.task("clean", function (cb) {
    //gulp.src(destPath)
    //    .pipe(clean());
    cb();
});

gulp.task("scriptsNStyles", function () {
    gulp.src([
            "es6-shim/es6-shim.min.js",
            "systemjs/dist/system-polyfills.js",
            "systemjs/dist/system.src.js",
            "reflect-metadata/Reflect.js",
            "rxjs/**",
            "zone.js/dist/**",
            "@angular/**",
			"symbol-observable/**",
            "jquery/dist/jquery.*js",
            "bootstrap/dist/js/bootstrap.*js",
			"ag-grid-ng2/**",
			"ag-grid/**"
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./Scripts/build/libs"));
});
var templateRegex = /templateUrl: ".*"/g;
var tsProject = ts.createProject("tsconfig.json");
gulp.task("ts", function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "Scripts/App/**/*.ts"
    ])
		.pipe(replace(templateRegex, function(match, __absolutePath__) {
			var fileContents = match.contents.toString();
			var fileName = fileContents.match(templateRegex);
			if(fileName == null) return null;
			fileName = fileName[0].split(':')[1].trim().replace(",", "");
			fileName = fileName.substring(3, fileName.length - 1);
			var basePath = __absolutePath__.slice(__absolutePath__.indexOf("Scripts\\App"));
			basePath = basePath.slice(0, basePath.lastIndexOf("\\")) + "\\";
			var fullPath = "templateUrl: \"" + basePath + fileName + "\"";
			fullPath = fullPath.replace(/\\/g,"/").replace(/App/, "build");
			return fullPath;
		}))
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest("./Scripts/build/"));
});

gulp.task("watch", ["watch.ts"]);

gulp.task("watch.ts", ["ts"], function () {
    gulp.watch("./Scripts/App/**/*.html", ["copyPartialViews"]);
    return gulp.watch("Scripts/App/**/*.ts", ["ts"]);
});

gulp.task("copyPartialViews", function () {
    gulp.src("./Scripts/App/**/*.html", { base: "./Scripts/App" })
        //.pipe(flatten())
        .pipe(gulp.dest(destPath));
});


gulp.task("default", ["clean", "scriptsNStyles", "watch", "copyPartialViews"]);