var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var $ = require("gulp-load-plugins")();

function sass() {
  return gulp
    .src("src/scss/app.scss")
    .pipe(
      $.sass({
        outputStyle: "compressed", // if css compressed **file size**
      }).on("error", $.sass.logError)
    )
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
}

function js() {
  return gulp
    .src("src/js/*.js")
    .pipe($.concat("app.js"))
    .pipe($.uglify())
    .pipe(gulp.dest("assets/js"));
}

function images() {
  return gulp.src("src/images/**").pipe(gulp.dest("assets/images"));
}

function serve() {
  browserSync.init({
    server: "./",
  });

  gulp.watch("src/scss/**/*.scss", sass);
  gulp.watch("*.html").on("change", browserSync.reload);
}

gulp.task("sass", sass);
gulp.task("js", js);
gulp.task("images", images);
gulp.task("serve", gulp.series(["images", "js", "sass"], serve));
gulp.task("default", gulp.series("sass", serve));
