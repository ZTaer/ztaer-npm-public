<pre>
# TODO: 实验记录目录:
    0. 2022.02.22
        a) Rollup 初步探索npm发布脚手架 - 实验一 ( 实验成功 )
    1. 2022.02.23
        a) Rollup 优化脚手架 - 实验二 ( 实验中... )
        b) Rollup 文件结构优化 - 实验三 
    2. 2022.02.24
        a) Rollup 搭建Npm发布脚手架汇总
</pre>

<pre>
# TODO: 2022.02.22 | Rollup 初步探索npm发布脚手架 - 实验一 ( 实验成功 ) 
    a) 00:00 - 参考视频: https://www.youtube.com/watch?v=hf6Z8OZanec&list=PLfVTUjGXQIdWD0v5ZsieLpqf5qVfn2O1H&index=7&t=1132s
        0. 参考脚手架: https://github.com/mui/material-ui/tree/master/packages/mui-material
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
        0. 安装: yarn add rollup rollup-plugin-babel @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-peer-deps-external @babel/preset-react -D
            a) 作用解析:
                0. rollup
                1. rollup-plugin-babel - 配合babel相关编译
                2. @rollup/plugin-node-resolve - 第三方依赖库相关
                3. rollup-plugin-peer-deps-external - 排除第三方依赖库打包相关( 如react,react-dom,防止引入库使用时产生冲突 )
                4. @rollup/plugin-commonjs - 配合resolve
    h) 18:45 - 配置: rollup.config.js
    i) 19:23 - 配置: package.json, 启动rollup
    j) 20:09 - 修正: 使css编译正常的配置
        0. 安装: yarn add rollup-plugin-postcss postcss -D
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
</pre>

<pre>
# TODO: 2022.02.22 | Rollup 优化脚手架 - 实验二 ( 实验中... )
    a) 参考项目:
        0. 文档: https://www.codefeetime.com/post/rollup-config-for-react-component-library-with-typescript-scss/
        1. Github: https://github.com/ZTaer/codefee-kit
    b) .npmignore - 决定哪些文件发布到npm
        0. 用法: 与.gitignore类似
    c) css/scss - 正常使用
        0. 基本安装: yarn add css-loader postcss rollup-plugin-postcss -D
        1. scss安装: yarn add rollup-plugin-scss sass
        2. 兼容storybook使用scss: yarn add -D @storybook/preset-scss css-loader@5.2.6 sass sass-loader@10.1.1 style-loader@2.0.0
            a) 需配置: /.storybook/main.js
            b) 需配置: rollup.config.js
    d) typescript - 正常使用
        0. 基本安装: yarn add typescript @rollup/plugin-typescript @typescript-eslint/parser -D
        1. 需配置: rollup.config.js
    e) eslint - 正常使用
        0. 基本安装: yarn add eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y -D
        1. 兼容react安装: yarn add eslint-plugin-react eslint-plugin-react-hooks -D
        2. 兼容ts安装: yarn add @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-import-resolver-typescript -D
        3. 兼容storybook安装: yarn add eslint-plugin-storybook -D
    f) husky + lint-staged - 保证git保存时进行校验代码
    g) 多文件输出/单文件输出,配合ts编译输出 ( 注意事项 )
        0. 多文件输出: 要考虑ts编译输出,如index.d.ts
        1. 单文件输出: 无需考虑ts编译输出
        2. css文件要单独抽离
        3. 注意: 生成文件夹相关 
            a) "dist": 单文件输出
            b) "lib": 多文件输出
    h) package.json配置项相关
        0. main: 指定cjs单核心文件 -> "dist/index.js"
        1. module: 指定es多核心文件 -> "lib/index.js"
        2. typings: 包含组件类型: -> "lib/index.d.ts",
        4. unpkg: ( 等待补充 ) "dist/index.js",
        <p>
            {
                "main": "dist/index.js",
                "module": "lib/index.js",
                "unpkg": "dist/index.js",
                "typings": "lib/index.d.ts",
                "outputDir": "./dist",
                "files": [
                    "dist",
                    "lib"
                ],

            }
        <p>

</pre>

<pre>
# TODO: 2022.02.24 ( 等待笔记 )
    a) Rollup 搭建Npm发布脚手架汇总
        0. 基本文件结构配置
        1. storybook相关配置
        2. rollup搭建脚手架基本配置
        3. rollup脚手架优化相关
            a) .npmignore - 决定哪些文件发布到npm
                0. 用法: 与.gitignore类似
            b) css/scss - 正常使用
                0. 基本安装: yarn add css-loader postcss rollup-plugin-postcss -D
                1. scss安装: yarn add rollup-plugin-scss sass
                2. 兼容storybook使用scss: yarn add -D @storybook/preset-scss css-loader@5.2.6 sass sass-loader@10.1.1 style-loader@2.0.0
                    a) 需配置: /.storybook/main.js
                    b) 需配置: rollup.config.js
            c) typescript - 正常使用
                0. 基本安装: yarn add typescript @rollup/plugin-typescript @typescript-eslint/parser -D
                1. 需配置: rollup.config.js
            d) eslint - 正常使用
                0. 基本安装: yarn add eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y -D
                1. 兼容react安装: yarn add eslint-plugin-react eslint-plugin-react-hooks -D
                2. 兼容ts安装: yarn add @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-import-resolver-typescript -D
                3. 兼容storybook安装: yarn add eslint-plugin-storybook -D
            f) prettier - 正常使用
            g) husky + lint-staged - 保证git保存时进行校验代码
            h) 区分生产环境/开发环境相关
                0. 保证rollup.config.js正常
                1. 在基于原始文件"rollup.config.js"去配置"scripts/rollup.xxx.js"进行定制化配置
                2. 部分配置需要ES5加工逻辑
                    a) plugins融合方法: 参考"scripts/rollup.es-config.dev.js"
                        0. 融合要求 --> 新配置会融合老配置,发生冲突时,会以新配置为主 
                        1. 融合原理 --> 参考"scripts/utils.script.js"
                3. 配置package.json
                    a) 目的: 清除旧文件,根据环境rollup配置生成新文件
                    b) 清除文件: 用node语法
                        <p>
                            {
                                "scripts": {
                                    "build-prod": "yarn clear && node_modules/.bin/rollup -c ./scripts/rollup.config.prod.js && node_modules/.bin/rollup -c ./scripts/rollup.es-config.prod.js",
                                    "build-dev": "yarn clear && node_modules/.bin/rollup -c ./scripts/rollup.config.dev.js && node_modules/.bin/rollup -c ./scripts/rollup.es-config.dev.js",
                                    "build-publish": "yarn build-prod && npm publish",
                                    "clear": "node ./scripts/clear.script.js",
                                }
                            }
                        </p>
        4. package.json与rollup配置相关
            g) 多文件输出/单文件输出,配合ts编译输出 ( 注意事项 )
                0. 多文件输出: 要考虑ts编译输出,如index.d.ts
                1. 单文件输出: 无需考虑ts编译输出
                2. css文件要单独抽离
                3. 注意: 生成文件夹相关 
                    a) "dist": 单文件输出
                    b) "lib": 多文件输出
            h) package.json配置项相关解析
                0. main: 指定cjs单核心文件 -> "dist/index.js"
                1. module: 指定es多核心文件 -> "lib/index.js"
                2. typings: 包含组件类型: -> "lib/index.d.ts",
                4. unpkg: ( 等待补充 ) "dist/index.js",
                <p>
                    {
                        "main": "dist/index.js",
                        "module": "lib/index.js",
                        "unpkg": "dist/index.js",
                        "typings": "lib/index.d.ts",
                        "outputDir": "./dist",
                        "files": [
                            "dist",
                            "lib"
                        ],

                    }
                </p>
    b) 发布Npm包

</pre>