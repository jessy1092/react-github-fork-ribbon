"use strict";

import gulp       from 'gulp';
import uglify     from 'gulp-uglify';
import grename    from 'gulp-rename';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import gbabel     from 'gulp-babel';

let build_path = 'dst';

gulp.task('transpile', () => {
  return gulp.src('./src/*.js')
    .pipe(gbabel({experimental: true}))
    .pipe(gulp.dest('./component/'));
});

gulp.task('browserify', () => {
  return browserify('./component/index.js')
    .bundle()
    .pipe(source('react-github-fork-ribbon.js'))
    .pipe(gulp.dest(build_path))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(grename('react-github-fork-ribbon.min.js'))
    .pipe(gulp.dest(build_path));
});

gulp.task('watch', (done) => {
  gulp.watch('./src/*.js', 'build');
  done()
})

gulp.task('build', gulp.series('transpile', 'browserify'));
gulp.task('dev', gulp.series('build', 'watch'));
gulp.task('default', gulp.series('build'));
