import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

/**
 * rollup主要配置( 等待笔记 )
 *      0. 基本安装: yarn add rollup rollup-plugin-babel @rollup/plugin-node-resolve rollup-plugin-peer-deps-external @babel/preset-react -D
 *          a) 作用解析:
 *              0. rollup
 *              1. rollup-plugin-babel - 配合babel相关编译
 *              2. @rollup/plugin-node-resolve - 第三方依赖库相关
 *              3. rollup-plugin-peer-deps-external - 排除第三方依赖库打包相关( 如react,react-dom,防止引入库使用时产生冲突 )
 *      1. 使css编译正常( 等待修正 ): yarn add rollup-plugin-postcss postcss -D
 *          a) 作用解析:
 *              0. rollup-plugin-postcss - 使css编译正常
 *              1. postcss - 保证插件运行正常
 *      2. 压缩打包文件: yarn add rollup-plugin-terser -D
 *          a) 作用解析:
 *              0. rollup-plugin-terser - 压缩打包文件
 */
export default [
    {
        input: "./src/index.js",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
            }),
            external(),
            resolve(),
            terser(),
            postcss({
                plugins: [],
                minimize: true,
            }),
        ],
    },
];
