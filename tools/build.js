/* eslint-disable no-console */
import webpack from 'webpack'
import webpackServerConfig from '../webpack.server.config'

const compiler = webpack(webpackServerConfig)

compiler.run((error, stats) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(stats.toString({
    chunks: false,
    colors: true
  }))
})
