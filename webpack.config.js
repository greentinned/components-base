const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  externals: {
    framer: {
      root: 'Framer',
      commonjs2: 'framer',
      commonjs: 'framer',
      amd: 'framer'
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'index',
    libraryTarget: 'umd'
  }
}
