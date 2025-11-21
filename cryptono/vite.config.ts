import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.ts'),
        contentScript: resolve(__dirname, 'src/contentScript.ts'),
        popup: resolve(__dirname, 'src/popup.html')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    outDir: 'dist'
  },
  plugins: [
    {
      name: 'copy-files',
      closeBundle() {
        // Copy manifest.json
        const manifestSrc = resolve(__dirname, 'src/manifest.json')
        const manifestDest = resolve(__dirname, 'dist/manifest.json')
        if (fs.existsSync(manifestSrc)) {
          fs.copyFileSync(manifestSrc, manifestDest)
        }
        
        // Copy popup.html
        const popupSrc = resolve(__dirname, 'src/popup.html')
        const popupDest = resolve(__dirname, 'dist/popup.html')
        if (fs.existsSync(popupSrc)) {
          fs.copyFileSync(popupSrc, popupDest)
        }
      }
    }
  ]
})