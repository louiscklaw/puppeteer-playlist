const gulp = require('gulp');

const { series, parallel } = require('gulp');
var run = require('gulp-run-command').default;

const CLEAN_CMD = 'rm -rf jobsdb_qa.png';
const BUILD_CMD = 'yarn build';
const WATCH_DIR = '.';

gulp.task('clean', run(CLEAN_CMD));

gulp.task(
  'build',
  gulp.series(
    'clean',
    run(BUILD_CMD, {
      ignoreErrors: true,
    })
  )
);

gulp.task('watch', () => {
  gulp.watch(WATCH_DIR, gulp.series('build'));
});

gulp.task('default', gulp.series('watch'));
