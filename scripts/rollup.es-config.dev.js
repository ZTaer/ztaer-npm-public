import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
import sass from "sass";

export default [
    {
        input: "src/index.ts",
        output: {
            dir: "lib",
            format: "es",
            preserveModules: true,
            preserveModulesRoot: "src",
            sourcemap: true,
        },
        plugins: [
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
            }),
            external(),
            resolve(),
            commonjs({
                defaultIsModuleExports: "auto",
            }),
            terser(),
            scss({
                exclude: ["node_modules/**"],
                failOnError: true,
                runtime: sass,
                sourceMap: true,
                output: "lib/index.css",
                outputStyle: "expanded",
            }),
            typescript({
                tsconfig: "./tsconfig.base.json",
                declaration: true,
                declarationDir: "lib",
            }),
        ],
        external: ["react", "react-dom"],
    },
];
