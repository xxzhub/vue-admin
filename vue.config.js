const path = require('path') 
const defaultSetting = require('./src/setting.js')

function reslove (dir) {
    return path.join(__dirname,dir)
}

const name = defaultSetting.name

const port = process.env.port || process.env.npm_config_port || 9527

module.exports = {
    publicPath: '/', //基本路径
    outputDir: 'dist', // 打包路径
    lintOnSave: false , // 保存的时候是否检测代码
    productionSourceMap: false, // 生产环境是否生成SourceMap文件

    devServer: {
        port: port,
        open: true,
        https: false,
        overlay: {
            warnings: false,
            errors:false,
        },// 错误和警告页面是否在页面弹出

        proxy: {
           /*  [process.env.VUE_APP_BASE_API]: {
                target: `http://127.0.0.1:${port}/mock`,
                changeOrigin: true,
                pathRewrite: {
                  ['^' + process.env.VUE_APP_BASE_API]: ''
                }
              } */
        }
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production'
        } else {
            config.mode = 'development'
        }

        Object.assign(config, {
            reslove: {
                alias: {
                    '@':path.reslove(__dirname,'./src')
                }
            }
        })
    }
}