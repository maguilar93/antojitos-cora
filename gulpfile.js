const gulp = require("gulp");
const sass = require("gulp-sass");
// const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

// gulp.task("default", ["styles"], function() {
//   gulp.watch("sass/**/*.scss", ["styles"]);

//   browserSync.init({
//     injectChanges: true,
//     server: {
//       baseDir: "./",
//       directory: true
//     }
//   });
// });

// gulp.task("styles", function() {
//   gulp
//     .src("sass/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(
//       autoprefixer({
//         browsers: ["last 2 versions"]
//       })
//     )
//     .pipe(gulp.dest("./css"))
//     .pipe(browserSync.stream());
// });

// Static Server + watching scss/html files
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./app"
  });

  gulp.watch("app/scss/*.scss", ["sass"]);
  gulp.watch("app/*.html").on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
