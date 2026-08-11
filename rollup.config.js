import typescript from '@rollup/plugin-typescript';

export default function() {
    return {
        input: {
            'webgpu': 'src/webgpu.ts',
            'frame-buffer': 'src/frame-buffer.ts',
            'surface': 'src/surface.ts',
            'surface-webgpu': 'src/surface-webgpu.ts',
            'surface-frame-buffer': 'src/surface-frame-buffer.ts',
        },
        output: {
            dir: 'dist',
            format: 'esm'
        },
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
            }),
        ]
    };
};
