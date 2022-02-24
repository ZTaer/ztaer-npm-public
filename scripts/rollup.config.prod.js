import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import sass from "sass";
import DefaultConfig from "../rollup.config";
import { handleUtilsCoverPlugins } from "./utils.script";

const { plugins = [] } = DefaultConfig[0];

export default [
    {
        ...DefaultConfig[0],
        output: [
            {
                file: "dist/index.js",
                sourcemap: false,
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                sourcemap: false,
                format: "esm",
            },
        ],
        plugins: handleUtilsCoverPlugins({
            newPlugins: plugins,
            oldPlugins: [
                scss({
                    exclude: ["node_modules/**", "dist/**"],
                    failOnError: true,
                    runtime: sass,
                    sourceMap: false,
                    output: "dist/index.css",
                    outputStyle: "compressed",
                }),
                typescript({
                    tsconfig: "./tsconfig.base.json",
                }),
            ],
        }),
    },
];
