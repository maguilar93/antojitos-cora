"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("browser-sync", function() {
  gulp.watch("sass/**/*.scss", ["styles"]);

  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: "./",
      directory: true
    }
  });
});

gulp.task("sass", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", ["browser-sync"], function() {
  gulp.watch("./scss/**/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});
