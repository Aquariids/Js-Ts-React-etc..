


const { src, dest, watch, parallel, series} = require('gulp', 'use strict');
const concat = require('gulp-concat');
const scss  = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');



function clearDist () {
    return del('dist');
}
function images() {
    return src('app/images/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/images'));

}
function browsersync () {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        browser: 'chrome'
    });
}

function scripts () {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/script.js'
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/script.min.js',
        'app/*.html'
    ], {base: 'app'})

    .pipe(dest('dist'));
}

function watching () {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js' ,'!app/js/script.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching =  watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.clearDist = clearDist;
exports.images = images;


exports.build = series(clearDist, images, build);
exports.default = parallel(styles, browsersync, watching,scripts);