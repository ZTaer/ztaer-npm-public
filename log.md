# 1 初步探索npm发布脚手架
    a) 00:00 - 参考视频: https://www.youtube.com/watch?v=hf6Z8OZanec&list=PLfVTUjGXQIdWD0v5ZsieLpqf5qVfn2O1H&index=7&t=1132s
    b) 2:59 - peerDependencies,要求安装的组件
    c) 3:57 - storybook,组件库生成文档第三方库推荐
        0. 官方: https://storybook.js.org/
        1. npm：https://www.npmjs.com/package/@storybook/cli
    d) 6:52 - 实验storybook用法
        0. 安装: npx sb init
        1. 建立实验函数组件: hello-word
    e) 9:09 - 配置组件到storybook渲染
        0. 建立文件: hello-word.stories.js
    f) 14:03 - rollup.js为打包工具,代替webpack
        0. 原因: rollup配置更为简便,很多成熟的项目都在使用,如materil-ui
    g) 15:02 - 安装rollup相关
        0. 安装: yarn add rollup rollup-plugin-babel @rollup/plugin-node-resolve rollup-plugin-peer-deps-external @babel/preset-react -D
            a) 作用解析:
                0. rollup
                1. rollup-plugin-babel - 配合babel相关编译
                2. @rollup/plugin-node-resolve - 第三方依赖库相关
                3. rollup-plugin-peer-deps-external - 排除第三方依赖库打包相关( 如react,react-dom,防止引入库使用时产生冲突 )
    h) 18:45 - 配置: rollup.config.js
    i) 19:23 - 配置: package.json, 启动rollup
    j) 20:09 - 修正: 使css编译正常的配置
        0. 安装: yarn add rollup-plugin-postcss -D
    k) 21:10 - 优化: 压缩打包文件
        0. 安装: yarn add rollup-plugin-terser -D
    l) 22:19 - 准备发布到npm,确保npm项目名称唯一
    m) 22:30 - 登陆npm, 输入npmjs.com注册的账号
        0. 命令: npm login 
    n) 22:56 - 修改package.json,打包输出文件相关配置
        0. {
            "main": "dist/index.js",
            "module": "dist/index.es.js"
        }
        1. 目的: 保证输出文件,是编译打包后的, 
    o) 23:04 - npm publish 发布包
    p) 23:29 - 检测发布结果


# 2 实验
