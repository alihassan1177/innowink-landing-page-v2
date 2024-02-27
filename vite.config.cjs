const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project_trio: resolve(__dirname, 'project-trio.html')
      }
    }
  }
}