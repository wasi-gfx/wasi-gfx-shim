import typescript from '@rollup/plugin-typescript';

export default function() {
    return {
        input: `./src/gfx.ts`,
        output: {
            file: `./src/gfx.js`,
            format: 'esm'
        },
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
            }),
        ]
    };
};
