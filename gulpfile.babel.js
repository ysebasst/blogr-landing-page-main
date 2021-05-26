const gulp = require("gulp");
const pug = require("gulp-pug");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

const browserSync = require("browser-sync");

const server = browserSync.create();

gulp.task("babel", () => {
  return gulp
    .src("./src/assets/js/*.js")
    .pipe(concat("scripts-min.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest("./public/assets/js"));
});

gulp.task("pug", () => {
  console.log(process.env.NODE_ENV);
  return gulp
    .src("./src/views/pages/*.pug")
    .pipe(
      pug({
        pretty: process.env.NODE_ENV ? false : true,
      })
    )
    .pipe(gulp.dest("./public"));
});

gulp.task("default", () => {
  server.init({
    server: "./public",
  });
  gulp
    .watch("./src/views/**/*.pug", gulp.series("pug"))
    .on("change", server.reload);
  gulp
    .watch("./src/assets/js/*.js", gulp.series("babel"))
    .on("change", server.reload);
});
