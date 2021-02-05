const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports={
    devServer:{
        open:false,
        port:9091
    },
    configureWebpack:config=>{
        name:'无敌是多么寂寞'
    },
    chainWebpack(config){
        // 1.修改当前项目默认svg配置，排除icon目录
        config.module.rule('svg')
            .exclude.add(resolve('src/icons/svg'))
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons/svg')).end()
            .use('svg-sprite-loader')
                .loader('svg-sprite-loader')
                    .options({symbolId:'icon-[name]'})

        // 2.新增一个rule:添加icons里面的svg
    }
}