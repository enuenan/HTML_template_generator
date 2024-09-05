import gulp from 'gulp';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';
// import htmlmin from 'gulp-htmlmin';
import path from 'path';

// Define paths
const paths = {
    templates: {
        src: 'src/pages/**/*.ejs',
        dest: 'templates/pages/',
        asset_dest: 'templates/',
    },
    components: 'src/components/**/*.html',
    assets: {
        css: 'src/css/**/*',
        js: 'src/js/**/*',
        Image: 'src/Image/**/*'
    }
};

// Task to compile EJS templates to HTML
function compileEjs() {
    return gulp.src(paths.templates.src)
        .pipe(ejs({}, {}, { ext: '.html' }))
        .pipe(rename({ extname: '.html' }))
        // .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.templates.dest));
}

// Task to copy CSS files to the templates folder
function copyCss() {
    return gulp.src(paths.assets.css)
        .pipe(gulp.dest(path.join(paths.templates.asset_dest, 'css')));
}

// Task to copy JS files to the templates folder
function copyJs() {
    return gulp.src(paths.assets.js)
        .pipe(gulp.dest(path.join(paths.templates.asset_dest, 'js')));
}

// Task to copy JS files to the templates folder
function copyImages() {
    return gulp.src(paths.assets.Image)
        .pipe(gulp.dest(path.join(paths.templates.asset_dest, 'Image')));
}

// Watch task to rebuild templates on changes
function watchFiles() {
    gulp.watch([paths.templates.src, paths.components], compileEjs);
    gulp.watch(paths.assets.css, copyCss);
    gulp.watch(paths.assets.js, copyJs);
    gulp.watch(paths.assets.Image, copyImages);
}

// Define complex tasks
const build = gulp.series(compileEjs, copyCss, copyJs, copyImages);
const watch = gulp.series(build, watchFiles);

// Export tasks
export { compileEjs, build, watch, copyCss, copyJs, copyImages };
export default build;
