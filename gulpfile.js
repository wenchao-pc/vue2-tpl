var gulp = require("gulp");

var express = require("express");
var proxyMiddleware = require('http-proxy-middleware')

var clean = require("gulp-clean");
var webpack = require("webpack");

/**
 * dev-server
 */
gulp.task("dev", function() {
    var app = express();
    var port = 8080;
    process.env.NODE_ENV = "dev";

    var compiler = webpack(require("./webpack.config"));

    //使用webpack-dev-middleware
    var devMiddleware = require("webpack-dev-middleware")(compiler, {
    	publicPath: "/",
        stats: {
            colors: true,
            chunks: false
        }
    });
    app.use(devMiddleware);

    // 开发环境配置代理
    var proxyTable = {
        // 匹配所有/rest开头的请求
        '/rest': {
            target: 'http://localhost',
            changeOrigin: true,
            pathRewrite: {
                '^/rest': ''
            }
        }
    }
    Object.keys(proxyTable).forEach(function(context) {
        var options = proxyTable[context]
        if (typeof options === 'string') {
            options = { target: options }
        }
        app.use(proxyMiddleware(context, options))
    })

    //使用webpack-hot-middleware热加载
    var hotMiddleware = require("webpack-hot-middleware")(compiler);
    app.use(hotMiddleware);

    //创建虚拟目录static放static目录下的静态资源
    app.use("/static", express.static("./static"));

    // 启动expres服务
    app.listen(port, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log('Listening at http://localhost:' + port + '\n');
    });
});



/**
 * gulp+webpack Build
 */
//删除dist
gulp.task("clean", function() {
    return gulp.src("./dist", {
        read: false
    }).pipe(clean());
});

//复制static目录
gulp.task("cp", ["clean"], function() {
    gulp.src("./static/**")
        .pipe(gulp.dest("./dist/static"));
});

//webpack打包
gulp.task("build", ["cp"], function() {
    process.env.NODE_ENV = "pro";
    webpack(require("./webpack.config"), function(err, stats) {
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
    });
})
