import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';//处理关联顺序

gulp.task(
  'build',
  gulpSequence('clean','css','pages','scripts',['browser','server'])
);//srever在最后次之browser;
