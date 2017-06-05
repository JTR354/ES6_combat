import yargs from 'yargs';

const args = yargs
  //production
 .option('production',{//.option类似gulp -xxx 提前参数用的;区分线上还是开发环境
    boolean:true,//bool值
    default:false,//默认值false开发环境
    describe:'min all scripts'
  })
  .option('watch',{//命令行控制是否监听
    boolean:true,
    default:false,
    describe:'watch all files'
  })
  .option('verbose',{//要不要详细的输出命令行的日志
    boolean:true,
    default:false,
    describe:'log'
  })
  //压缩文件,js映射,处理该参数的//强制生成sourcemaps
  .option('sourcemaps',{
    describe:'force creation if sourcemaps'
  })
  .option('port',{//服务器的端口
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv//表示输入的命令行,以字符串作为解析.

export default args;
