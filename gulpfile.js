"use strict";

let gulp = require('gulp');
    let less = require('gulp-less');
    let autoprefixer = require('gulp-autoprefixer');
    // pug = require('gulp-pug'),
    let plumber = require('gulp-plumber');
    let imagemin = require('gulp-imagemin');
    let pngquant = require('imagemin-pngquant');
    let browserSync = require('browser-sync').create();

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/img/*.*', ['img']);

});

// HTML
gulp.task('html', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
});

// Чистка папки продакшена
gulp.task('clean', function (cb) {
  cleaner(build, cb);
});

//JADE
// gulp.task('html', function() {
//   gulp.src('src/pug/*.pug')
//     .pipe(plumber())
//     .pipe(pug({
//       pretty: true
//     }))
//     .pipe(gulp.dest('build'));
// });


// files
// gulp.task('files', function() {
//   gulp.src('src/files/*.*')
//     .pipe(gulp.dest('build/files'));
// });

// Сжатие javascript
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    // .pipe(plumber())
    // .pipe(uglyjs())
    // .pipe(rename(function (path) {
    //   path.basename += ".min"
    // }))
    .pipe(gulp.dest('build/js'));
});

// Сжатие изображений
gulp.task('img', function() {
  return gulp.src('src/img/*/*.*')
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('build/img'));
});

// // Fonts
// gulp.task('fonts', function() {
//   return gulp.src('src/fonts/Roboto/*.*')
//     .pipe(gulp.dest('build/fonts'));
// });

// LESS
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less().on('error', function(error) {
            console.log(error);
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', function() {
	gulp.run('clean');
    gulp.run('html');
    gulp.run('img');
    gulp.run('less');
    // gulp.run('fonts');
    gulp.run('js');
    // gulp.run('files');
    gulp.run('browser-sync');

    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch('build/*.html').on('change', browserSync.reload);
    gulp.watch('build/img/*.*').on('change', browserSync.reload);
    gulp.watch('build/js/*.js').on('change', browserSync.reload);
    gulp.watch('build/css/*.css').on('change', browserSync.reload);
});

gulp.task('less:watch', function () {
  gulp.watch('./src/less/**/*.less', ['less']);
});