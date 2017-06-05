import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';//gulp常用的集合.
import args from './util/args';

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']);//当gulp监听到APP文档下的js文件发生变化时,就调用scripts脚本.
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
