var gulp        = require("gulp");
var sass    = require("gulp-sass");
var gulpLint    = require("gulp-scss-lint");


gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});