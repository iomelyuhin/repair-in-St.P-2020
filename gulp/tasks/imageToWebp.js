const gulp = require('gulp')
const webp = require('gulp-webp')

module.exports = function imageToWebp() {
  return gulp.src('src/assets/img/content/*.{gif,png,jpg,svg,webp}')
    .pipe(webp())
    .pipe(gulp.dest('build/assets/img/content/'))
}

