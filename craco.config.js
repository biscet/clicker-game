const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@utils': resolvePath('./src/utils'),
      '@images': resolvePath('./src/assets/images'),
      '@styles': resolvePath('./src/assets/styles'),
      '@models': resolvePath('./src/models'),
      '@pages': resolvePath('./src/pages'),
      '@components': resolvePath('./src/components')
    }
  },
  babel: {
    plugins: ['@babel/plugin-syntax-optional-chaining']
  }
}
