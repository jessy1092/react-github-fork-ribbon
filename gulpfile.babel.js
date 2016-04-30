import gulp       from 'gulp';
import util       from 'gulp-util';
import livereload from 'gulp-livereload';
import jade       from 'gulp-jade';
import plumber    from 'gulp-plumber';
import uglify     from 'gulp-uglify';

import express from 'express';
import connect from 'connect-livereload';
import path    from 'path';

import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';

let app        = express();
let build_path = '_public';

gulp.task('jade', () => {
  return gulp.src('./client/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(`${build_path}`))
    .pipe(livereload());
});

gulp.task('css', () => {
  return gulp.src('./client/styles/*')
    .pipe(gulp.dest(`${build_path}/styles/`))
    .pipe(livereload());
});

gulp.task('browserify', () => {
  return browserify('./client/scripts/index.js')
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(`${build_path}/scripts/`))
    .pipe(livereload());
});

gulp.task('server', () => {
  app.use(connect());
  app.use(express.static(path.resolve(`${build_path}`)));
  app.listen(3000);
  util.log('listening on port 3000');
});

gulp.task('watch', () => {
  livereload.listen({start: true});
  gulp.watch('./client/index.jade', ['jade']);
  gulp.watch('./client/styles/*.css', ['css']);
  gulp.watch('./client/scripts/**/*', ['browserify']);
});

gulp.task('build', ['jade', 'browserify', 'css']);
gulp.task('dev', ['build', 'server', 'watch']);
gulp.task('default', ['build']);
