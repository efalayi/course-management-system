import HtmlWepackPlugin from 'html-webpack-plugin'
import optimize from './config/webpack/optimize'
import DEV_TOOLS from './config/webpack/devtools'
import appPaths from './config/paths'

const environment = 'production'
const devtool = DEV_TOOLS[environment]

export default {
  name: 'client',
  target: 'web',
  mode: environment,
  devtool,
  entry: {
    index: './client/index.jsx'
  },
  output: {
    path: `${appPaths.appBuild}/client`,
    publicPath: '/',
    filename: 'static/js/[name].min.js',
  },
  node: {
    net: 'empty',
    dns: 'empty'
  },
  optimization: optimize(environment, 'server'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: appPaths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}
