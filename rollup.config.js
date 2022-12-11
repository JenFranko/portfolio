const babel = require('rollup-plugin-babel');
const multi = require('@rollup/plugin-multi-entry');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonJS = require('@rollup/plugin-commonjs');
const fileSize = require('rollup-plugin-filesize');

// The first input is now an ephemeral placeholder that gets prorperly transpiled
module.exports = [
    {
        input: {
            include: ['src/partials/**/*.js'],
            exclude: ['src/partials/**/*.spec.js']
        },
        output: {
            file: 'dist/assets/js/jenfranko-temp.js',
            format: 'umd',
            name: 'jenfranko'
        },
        plugins: [
            nodeResolve(),
            commonJS(),
            multi(),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    },
    {
        input: 'dist/assets/js/jenfranko-temp.js',
        output: {
            file: 'dist/assets/js/jenfranko.js',
            format: 'umd',
            name: 'jenfranko'
        },
        plugins: [
            nodeResolve(),
            commonJS(),
            babel({
                exclude: 'node_modules/**'
            }),
            terser(),
            fileSize()
        ]
    }
];
