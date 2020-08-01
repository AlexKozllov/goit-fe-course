module.exports = {
  src: {
    html: 'src/*.html',
    css: 'src/sass/main.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
  },
  watch: {
    html: 'src/**/*.html',
    css: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
  },
  build: {
    html: 'build/html-css/module_11/',
    css: 'build/html-css/module_11/css',
    js: 'build/html-css/module_11/js',
    images: 'build/html-css/module_11/images',
    fonts: 'build/html-css/module_11/fonts',
  },
  inject: {
    html: 'build/html-css/module_11/index.html',
    css: 'build/html-css/module_11/css/**/*.css',
    js: 'build/html-css/module_11/js/**/*.js',
  },
  clean: 'build/html-css/module_11/',
};
