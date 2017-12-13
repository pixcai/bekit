const path = require('path')
const glob = require('glob')
const analyzer = require('webpack-bundle-analyzer')

module.exports = {
  distDir: 'build',
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(css|scss)$/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]'
      }
    }, {
      test: /\.css$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader']
    }, {
      test: /\.scss$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader', {
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, './assets/css'),
            path.resolve(__dirname, './node_modules')
          ]
          .map(dir => glob.sync(dir))
          .reduce((includePaths, dir) => includePaths.concat(dir))
        }
      }]
    })
    if (dev) {
      config.plugins.push(new analyzer.BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: false
      }))
    }

    return config
  }
}