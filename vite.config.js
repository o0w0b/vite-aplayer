import { defineConfig } from 'vite'
import pkg from './package.json'
import path from 'path'
import autoprefixer from 'autoprefixer'
import dts from 'vite-plugin-dts'

export default defineConfig({
    define: {
        'APLAYER_VERSION': `"${pkg.version}"`
    },
    css: {
        postcss: {
            plugins: [autoprefixer()]
        }
    },
    build: {
        sourcemap: true,
        minify: 'terser',
        lib: {
            entry: path.resolve(__dirname, 'src/js/index.js'),
            name: 'APlayer',
            formats: ['esm', 'umd'],
            fileName: (format) => `APlayer.${format}.js`
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'APlayer.min[extname]';
                    }
                    return '[name].[hash][extname]';
                }
            }
        }
    },
    plugins: [
        {
            name: 'njk-string-loader',
            transform(code, id) {
                if (id.endsWith('.njk')) {
                    return {
                        code: `export default ${JSON.stringify(code)};`,
                        map: null
                    }
                }
            }
        },
        dts({ insertTypesEntry: true }) // 自动生成 .d.ts
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
})
