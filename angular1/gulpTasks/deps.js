const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function() {
  gulp.src([
    'node-modules/angular/angular.min.js',
    'node-modules/angular-ui-router/release/angular-ui-router.min.js',
    'node-modules/angular-animate/angular-animate.min.js',
    'node-modules/angular-toastr/dist/angular-toastr.tpls.min.js',
    'node-modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
    'node-modules/admin-lte/bootstrap/js/bootstrap.min.js',
    'node-modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
    'node-modules/admin-lte/dist/js/app.min.js'
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {
  gulp.src([
    'node-modules/angular-toastr/dist/angular-toastr.min.css',
    'node-modules/font-awesome/css/font-awesome.min.css',
    'node-modules/admin-lte/bootstrap/css/bootstrap.min.css',
    'node-modules/admin-lte/dist/css/AdminLTE.min.css',
    'node-modules/admin-lte/dist/css/skins/_all-skins.min.css'
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', function() {
  gulp.src([
    'node-modules/font-awesome/fonts/*.*',
    'node-modules/admin-lte/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
})
