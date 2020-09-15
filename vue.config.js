
module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                //本地服务接口地址
                // target: 'http://192.168.1.120:10001/',
                //远程地址
                target: 'http://192.168.2.179:3000/',
                ws: true,
                timeout: 1000000,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },

    }
}
