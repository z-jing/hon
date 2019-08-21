module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/styles/common.scss";`
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
}
