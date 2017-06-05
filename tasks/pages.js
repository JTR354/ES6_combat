//处理模板的
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs')//打开一个文件进行处理 /**所有嵌套的文件/*.ejs便是所有.ejs文件.
  .pipe(gulp.dest('server'))//原封不动的拷贝到server目录下
  .pipe(gulpif(args.watch,livereload()))
})
