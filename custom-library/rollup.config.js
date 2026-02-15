import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/index.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/esm/index.js',
                format: 'esm',
                sourcemap: true
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'}),
            peerDepsExternal(),
            terser(),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es'}],
        plugins: [dts()],
    }
]

export default config;

