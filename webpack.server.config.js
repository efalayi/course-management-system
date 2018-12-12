import path from 'path'
import nodeExternals from 'webpack-node-externals'
import optimize from './config/webpack/optimize'
import DEV_TOOLS from './config/webpack/devtools'

const environment = 'developemnt'
const devtool = DEV_TOOLS[environment]

export default {
  mode: 'development',
  name: 'server',
  devtool,
  entry: [
    path.join(__dirname, '/server/server.js'),
  ],
  output: {
    path: path.resolve(__dirname, './build/server'),
    filename: 'server.min.js',
  },
  target: 'node',
  externals: [nodeExternals()],
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
  optimization: optimize(environment, 'server'),
}
