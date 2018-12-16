/* eslint-disable no-console */
import chalk from 'chalk'
import dotenv from 'dotenv'
import HtmlWepackPlugin from 'html-webpack-plugin'
import optimize from './config/webpack/optimize'
import DEV_TOOLS from './config/webpack/devtools'
import appPaths from './config/paths'

dotenv.config()

const PORT = process.env.REACT_APP_PORT || 3000
const environment = 'development'
const devtool = DEV_TOOLS[environment]

console.log(chalk.green('Bundling client files for development...'))

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
  optimization: optimize(environment, 'server'),
  devServer: {
    contentBase: './dist',
    port: PORT
  },
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
