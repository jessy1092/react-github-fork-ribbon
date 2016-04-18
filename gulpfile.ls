require! <[gulp gulp-util gulp-livereload gulp-jade gulp-plumber gulp-uglify]>
require! <[express connect-livereload path]>
require! <[vinyl-source-stream vinyl-buffer browserify]>

app        = express!
build_path = '_public'
uglify     = gulp-uglify
source     = vinyl-source-stream
buffer     = vinyl-buffer
livereload = gulp-livereload

gulp.task 'jade', ->
  gulp.src './client/index.jade'
    .pipe gulp-plumber!
    .pipe gulp-jade!
    .pipe gulp.dest "#{build_path}"
    .pipe livereload!

gulp.task 'images', ->
  gulp.src './client/images/*'
    .pipe gulp.dest "#{build_path}/images/"
    .pipe livereload!

gulp.task 'data', ->
  gulp.src './client/data/*'
    .pipe gulp.dest "#{build_path}/data/"
    .pipe livereload!

gulp.task 'css', ->
  gulp.src './client/styles/*.css'
    .pipe gulp.dest "#{build_path}/styles/"
    .pipe livereload!

gulp.task 'browserify', ->
  browserify './client/scripts/index.js'
    .transform 'babelify' {presets: <[es2015 react stage-0]>}
    .bundle!
    .pipe source 'bundle.js'
    .pipe buffer!
    .pipe uglify!
    .pipe gulp.dest "#{build_path}/scripts/"
    .pipe livereload!

gulp.task 'server', ->
  app.use connect-livereload!
  app.use express.static path.resolve "#{build_path}"
  app.listen 3000
  gulp-util.log 'listening on port 3000'

gulp.task 'watch', ->
  livereload.listen start: true
  gulp.watch './client/index.jade', <[jade]>
  gulp.watch './client/data/*', <[data]>
  gulp.watch './client/styles/*.css', <[css]>
  gulp.watch './client/scripts/**/*', <[browserify]>

gulp.task 'build', <[jade browserify css]>
gulp.task 'dev', <[build server watch]>
gulp.task 'default', <[build]>
