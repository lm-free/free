const path = require('path') //导入node path

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//动态获取路径  
        filename:'bundle.js',
        publicPath:'dist/' //为了载url前面加上dist路径
    },
	mode : 'development',
   // development为开发者环境，production为生产环境变量 ，还有一个为none
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        //当加载的图片，小于limit时，会将图片编译base64自负床形式
                        //当加载的图片，大于limit时// ，需要使用file-loader模块进行加载
                        limit: 8192,
                        name: 'img/[name].[hash:8].[ext]'//name对图片进行命名
                        //ext扩展名
                    }
                }
            ]
        },
        {
            test:/\.vue$/,
            use:['vue-loader']
        }
        // {
        //     test: /\.js$/,
        //     //exclude排除
        //     //include包含
        //     exclude: /(node_modules|bower_components)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['es2015']
        //         }
        //     }
        // }
    ]
  },
    resolve: {
        //别名
        alias:{
            //js css vue 配置后缀名可以不用写
            extensions:['.js','.css','.vue'],
          'vue$':'vue/dist/vue.esm.js' //代码中引用有没有具体指定文件夹
        }
    }
}
