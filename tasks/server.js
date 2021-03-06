import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cd)=>{
  if(!args.watch) return cd();//未监听传回调函数.

  var server = liverserver.new(['--harmony','server/bin/www']);//创建一个服务器;--harmony在当前命令行下执行该脚本
  server.start();

  //css js ejs 改变时服务器的端的文件热更新.
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    //通知服务器修改更新的文件
    server.notify.apply(server,[file]);
  })

  //当接口发送改变时,需要重启服务器
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})
