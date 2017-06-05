import gulp from 'gulp';//gulp构建
import gulpif from 'gulp-if';//gulpif判断
import concat from 'gulp-concat';//gulp中处理文件拼接的
import webpack from 'webpack';//webpack用来打包
import gulpWebpack from 'webpack-stream';//gulp都是处理文件流操,基于webpack-stream
import named from 'vinyl-named';//文件重命名做标志的包
import livereload from 'gulp-livereload';//文件更新后浏览器自动刷新的功能,热更新的包
import plumber from 'gulp-plumber';//处理文件信息流的包
import rename from 'gulp-rename';//文件重命名的包
import uglify from 'gulp-uglify';//处理js和css压缩的包
import {log,colors} from 'gulp-util';//在命令行输出的一些包
import args from './util/args';

//gulp.task是标准API创建一个任务
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])//打开该文件
    .pipe(plumber({
      errorHandle:function(){

      }
    }))//处理错误逻辑,需要集中处理异常,改变默认处理机制

    .pipe(named())//文件重新命名一下
    .pipe(gulpWebpack({
      module:{
        loader:[{
          test:/\.js$/, //遇到js用babel进行处理,进行编译
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks:false
      }))//对错误的一个处理
    })//对js重新编译

    //编译完文件存放位置,指定路径(为进行压缩)
    .pipe(gulp.dest('server/public/js'))//server要拿到最新的js后才能在整个服务中跑起来.

    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))//编译压缩的工作,重命名还药压缩
    //重命名后的压缩工作,配置如何压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    //压缩后存储
    .pipe(gulp.dest('server/public/js'))
    //监听文件然后自动刷新
    .pipe(gulpif(args.watch,livereload()))//if判断是否有args.watch监听,有就热加载.
})
