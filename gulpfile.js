var gulp = require('gulp');
var connect = require('gulp-connect');
var traceur = require('traceur');
var shell = require('gulp-shell');

gulp.task('connect', function() {
    connect.server({
        root: 'www',
        livereload: true,
        port: 9000
    })
})

gulp.task('traceur', shell.task([
    './node_modules/traceur/traceur --out www/js/build.js www/js/app.js'
]))

gulp.task('reload', function() {
    gulp.src('www').pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch(['www/js/*.js', '!www/js/build.js'], ['traceur']);
    gulp.watch(['www/js/build.js'], ['reload']);
})

gulp.task('default', ['connect', 'watch']);

gulp.task('setup', function() {
    gulp.src('node_modules/traceur/bin/traceur-runtime.js').pipe(gulp.dest('www/lib'));
    gulp.src('node_modules/lodash/dist/lodash.underscore.js').pipe(gulp.dest('www/lib'));
})
