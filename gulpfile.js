var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('copyHtml', function(){
  gulp.src('server/dist/index.html').pipe(gulp.dest('public/'))
})

gulp.task('default', function(){
  nodemon({
    script: './app.js'
  }).on('start', ['copyHtml'])
})
