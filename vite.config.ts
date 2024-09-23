import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// @ts-ignore
import path from 'path'
// @ts-ignore
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/bundle-visualizer.html', // File path for the output
      open: true, // Automatically open the report in the browser
      gzipSize: true, // Show gzipped size of the bundles
      brotliSize: true // Show Brotli-compressed size of the bundles
    }),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg'
    })
  ],
  // optimizeDeps: {
  //   esbuildOptions: {
  //     // Node.js global to browser global polyfills
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         buffer: true
  //       }),
  //       NodeModulesPolyfillPlugin()
  //     ]
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
      // buffer: 'buffer'
    }
  },
  build: {
    outDir: 'dist' // Ensure this matches the directory you're passing in the GitHub Action
  }
})

// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [],
//   optimizeDeps: {
//     esbuildOptions: {
//       // Node.js global to browser global polyfills
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           buffer: true
//         }),
//         NodeModulesPolyfillPlugin()
//       ]
//     }
//   },
//   resolve: {
//     alias: {
//       buffer: 'buffer'
//     }
//   }
// })
